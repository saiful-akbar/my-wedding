import React from "react";
import { Box, Icon, IconButton, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { transition } from "@/animation/transition";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import CollectionsTwoToneIcon from '@mui/icons-material/CollectionsTwoTone';

/**
 * Daftar link
 *
 * @type {Array}
 */
const links = [
  {
    title: "Home",
    elementId: "hero",
    IconMenu: ({ ...rest }) => <HomeTwoToneIcon {...rest} />,
  },
  {
    title: "Mempelai",
    elementId: "mempelai",
    IconMenu: ({ ...rest }) => <FavoriteTwoToneIcon {...rest} />,
  },
  {
    title: "Tanggal",
    elementId: "tanggal",
    IconMenu: ({ ...rest }) => <CalendarMonthTwoToneIcon {...rest} />,
  },
  {
    title: "Lokasi",
    elementId: "lokasi",
    IconMenu: ({ ...rest }) => <LocationOnTwoToneIcon {...rest} />,
  },
  {
    title: "Galeri",
    elementId: "galeri",
    IconMenu: ({ ...rest }) => <CollectionsTwoToneIcon {...rest} />,
  },
];

const parentVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    x: "-50%",
  },
  open: {
    opacity: 1,
    y: 1,
    x: "-50%",
    transition: {
      ...transition,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  open: {
    opacity: 1,
    y: 1,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

const iconVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  open: {
    opacity: 1,
    y: 1,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Komponen menu
 */
const Menu = () => {

  /**
   * Fungsi untuk scroll to element
   *
   * @param {object} e
   */
  const scrollTo = (e, elementId) => {
    e.preventDefault();

    const element = document.getElementById(elementId);
    const headerOffset = 0;
    const elementPosition = element?.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component={motion.div}
      variants={parentVariants}
      initial="hidden"
      animate="open"
      exit="exit"
      boxShadow={10}
      sx={{
        borderRadius: 2,
        backgroundColor: "rgba(213, 206, 163, 0.7)",
        position: "fixed",
        zIndex: 1000,
        bottom: { md: 20, xs: 15 },
        left: "50%",
        transform: "translateX(-50%)",
        p: 1,
      }}
    >
      <Box
        component={motion.nav}
        variants={cardVariants}
        sx={{
          backgroundColor: "text.primary",
          borderRadius: 2,
          py: 1,
          px: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {links.map(({ title, IconMenu, elementId }, key) => (
          <Tooltip key={key} title={title}>
            <IconButton
              component={motion.button}
              variants={iconVariants}
              onClick={(e) => scrollTo(e, elementId)}
              sx={{
                mr: 2,
                "&:last-child": {
                  mr: 0,
                },
              }}
            >
              <IconMenu sx={{ color: 'text.secondary' }} />
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default Menu;
