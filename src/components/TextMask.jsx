import { Box } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

/**
 * Komponen utam TextMask
 *
 * @param  {React Node} options.children
 * @param  {...any} options.rest
 *
 * @return
 */
const TextMask = ({ children, ...rest }) => {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        overflow: "hidden",
        padding: "0.2em 0.2em 0.2em 0",
        verticalAlign: "top",
        span: {
          display: "inline-block",
        },
      }}
    >
      <motion.span {...rest}>{children}</motion.span>
    </Box>
  );
};

/**
 * prop types komponen TextMask
 *
 * @type {Object}
 */
TextMask.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextMask;
