import { transition } from "@/animation/transition";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import TextMask from "../TextMask";

const parentVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    y: 1,
    opacity: 1,
    transition: {
      ...transition,
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

/**
 * Text variant
 */
const textVariants = {
  hidden: {
    opacity: 0,
    y: "80%",
    skewY: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

// Icons variants
const iconVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Komponent tanggal
 *
 * @returns Reacr.ReactElement
 */
const CardTanggal = ({ title, tanggal, jam, lokasi, alamat, link }) => {
  return (
    <Card
      elevation={0}
      variant="outlined"
      component={motion.div}
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true }}
      sx={{ borderRadius: 0 }}
    >
      <CardContent
        sx={{
          pt: 5,
          px: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          color="text.secondary"
          variant="h3"
          sx={{ textAlign: "center", fontWeight: 700 }}
        >
          {title.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>

        <Box
          component={motion.div}
          variants={iconVariants}
          sx={{
            border: 2,
            borderColor: "text.secondary",
            borderRadius: "50%",
            width: 100,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 3,
          }}
        >
          <CalendarMonthTwoToneIcon
            sx={{ fontSize: 60, color: "text.secondary" }}
          />
        </Box>

        <Typography
          color="text.secondary"
          variant="h5"
          component="p"
          sx={{ textAlign: "center", mt: 4, fontWeight: 700 }}
        >
          {tanggal.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>

        <Typography
          color="text.secondary"
          variant="body2"
          sx={{ textAlign: "center", fontWeight: 700 }}
        >
          {jam.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>

        <Box
          component={motion.div}
          variants={iconVariants}
          sx={{
            border: 2,
            borderColor: "text.secondary",
            borderRadius: "50%",
            width: 100,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <MapTwoToneIcon sx={{ fontSize: 60, color: "text.secondary" }} />
        </Box>

        <Typography
          color="text.secondary"
          variant="h5"
          component="p"
          sx={{ textAlign: "center", mt: 4, fontWeight: 700 }}
        >
          {lokasi.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>

        <Typography
          color="text.secondary"
          variant="body2"
          sx={{ textAlign: "center", fontWeight: 700, mt: 2 }}
        >
          {alamat.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 5 }}>
        <Button
          component={motion.a}
          variants={iconVariants}
          disableElevation
          fullWidth
          size="large"
          variant="contained"
          color="secondary"
          startIcon={<LocationOnTwoToneIcon />}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ borderRadius: 0 }}
        >
          Kunjungi via GMaps
        </Button>
      </CardActions>
    </Card>
  );
};

/**
 * CardTanggal prop types
 */
CardTanggal.propTypes = {
  title: PropTypes.string.isRequired,
  tanggal: PropTypes.string.isRequired,
  jam: PropTypes.string.isRequired,
  lokasi: PropTypes.string.isRequired,
  alamat: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default React.memo(CardTanggal);
