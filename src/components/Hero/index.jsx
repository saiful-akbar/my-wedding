import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { transition, parentVariants } from "@/animation/transition";
import { motion } from "framer-motion";
import useDB from "@/hooks/useDB";
import TextMask from "../TextMask";

/**
 * Animasi gambar
 */
const imageVariants = {
  hidden: {
    scale: 2,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition,
  },
  exit: {
    opacity: 0,
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

/**
 * Text variant
 */
const dividerVariants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  show: {
    scaleX: 1,
    originX: 0,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Hero element
 *
 * @returns React.ReactElement
 */
const Hero = () => {
  const { hero, wedding } = useDB((db) => db);

  const mempelaiPria = wedding.mempelai.pria.namaDepan;
  const mempelaiWanita = wedding.mempelai.wanita.namaDepan;
  const mempelai = `${mempelaiPria} & ${mempelaiWanita}`;
  const undangan = "The wedding of";

  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true }}
    >
      <Box
        sx={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          component={motion.img}
          alt="Hero background"
          variants={imageVariants}
          src={hero.banner}
          sx={{
            objectFit: "cover",
            objectPosition: "bottom center",
            width: "100%",
            height: "100vh",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            backgroundImage: ({ palette }) => {
              return `linear-gradient(to bottom, transparent, ${palette.background.default})`;
            },
          }}
        >
          <Container>
            <Typography
              variant="h2"
              sx={{
                textAlign: {
                  md: "left",
                  xs: "center",
                },
                fontSize: {
                  md: 70,
                  xs: 45,
                },
                textShadow: "3px 3px rgba(60, 42, 33, 0.6)",
              }}
            >
              {undangan.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>

            <Typography
              variant="h1"
              sx={{
                textAlign: {
                  md: "left",
                  xs: "center",
                },
                fontSize: {
                  md: "10em",
                  xs: "6em",
                },
                textShadow: "5px 5px rgba(60, 42, 33, 0.6)",
              }}
            >
              {mempelai.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>

            <Box
              component={motion.div}
              variants={dividerVariants}
              sx={{ borderBottom: 3, borderColor: "divider" }}
            />

            <Typography
              variant="h3"
              component="p"
              sx={{
                mt: 2,
                textAlign: {
                  md: "left",
                  xs: "center",
                },
                fontSize: {
                  md: "3em",
                  xs: "2em",
                },
                textShadow: "3px 3px rgba(60, 42, 33, 0.6)",
              }}
            >
              {wedding.resepsi.tanggal.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>
          </Container>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Hero;
