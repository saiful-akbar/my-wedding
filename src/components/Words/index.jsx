import { parentVariants, transition } from "@/animation/transition";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TextMask from "../TextMask";

/**
 * Text variant
 */
const textVariants = {
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
 * Komponent kata-kata pembuka
 *
 * @returns React.ReactElement
 */
const Words = () => {
  const salam = "Assalamu'alaikum Warahmatullahi Wabarakatuh.";
  const words =
    "Maha suci Allah yang telah menciptakan mahluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan diantara kami untuk mengikuti Sunnah Rasul-Mu dalam rangka membentuk keluarga yang sakinah, mawaddah, warahmah.";

  return (
    <Container
      component={motion.div}
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        my: 20,
      }}
    >
      <Typography
        variant="h3"
        component="div"
        sx={{
          textAlign: "center",
          fontSize: {
            md: "3em",
            xs: "2em",
          },
        }}
      >
        {salam.split(" ").map((text, key) => (
          <TextMask key={key} variants={textVariants}>
            {text}
          </TextMask>
        ))}
      </Typography>

      <Typography
        variant="h6"
        component="div"
        sx={{ textAlign: "center", mt: 5 }}
      >
        {words.split(" ").map((text, key) => (
          <TextMask key={key} variants={textVariants}>
            {text}
          </TextMask>
        ))}
      </Typography>
    </Container>
  );
};

export default Words;
