import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";

/**
 * Smooth scroll komponen untuk layout
 *
 * @param {object} props
 * @returns React.ReactElement
 */
const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0);

  // update scrollable height when browser is resizing
  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  // observe when browser is resizing
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );

    scrollRef && resizeObserver.observe(scrollRef.current);

    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  // measures how many pixels user has scrolled vertically
  // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);

  // easing of smooth scroll
  const physics = { damping: 15, mass: 0.27, stiffness: 70 };

  // apply easing to the negative scroll value
  const spring = useSpring(transform, physics);

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className="scroll-container"
      >
        {children}
      </motion.div>

      <div style={{ height: pageHeight }} />
    </>
  );
};

export default SmoothScroll;
