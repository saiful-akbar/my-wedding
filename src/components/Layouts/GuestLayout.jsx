import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import useDB from "@/hooks/useDB";
import Menu from "@/components/Menu";
import SmoothScroll from "./SmoothScroll";
import Backsound from "../Backsound";
import { BrowserView, MobileView } from "react-device-detect";

/**
 * Guest layout
 *
 * @param {React.ReactNode} options.children
 * @param {string} options.title
 *
 * @return {React.ReactElement}
 */
const GuestLayout = ({ children, ...rest }) => {
  const app = useDB((db) => db.application);

  /**
   * Update title pada document.
   */
  React.useEffect(() => {
    document.title = app.name;
  }, [app]);

  /**
   * Konten
   */
  const content = (
    <Box component="main" id="mainContent" {...rest}>
      {children}
    </Box>
  );

  /**
   * Render komoponen.
   */
  return (
    <>
      <Menu />
      <Backsound />

      <BrowserView>
        <SmoothScroll>{content}</SmoothScroll>
      </BrowserView>

      <MobileView>{content}</MobileView>
    </>
  );
};

/**
 * Prop types
 */
GuestLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Default props
 */
GuestLayout.defaultProps = {};

export default GuestLayout;
