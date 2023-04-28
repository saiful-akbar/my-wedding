import { parentVariants, transition } from "@/animation/transition";
import useDB from "@/hooks/useDB";
import { Container, Divider, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TextMask from "../TextMask";
import CardTanggal from "./CardTanggal";

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
 * Komponent tanggal
 *
 * @returns Reacr.ReactElement
 */
const Tanggal = () => {
  const textHeader = "Rangkaian Acara Akan Diselenggarakan";
  const { akad, resepsi } = useDB((db) => db.wedding);

  return (
    <Container sx={{ py: 15 }}>
      <Grid container spacing={5}>
        <Grid
          item
          xs={12}
          component={motion.div}
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={{ once: true }}
        >
          <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
            {textHeader.split(" ").map((text, key) => (
              <TextMask key={key} variants={textVariants}>
                {text}
              </TextMask>
            ))}
          </Typography>

          <Typography variant="h2" sx={{ textAlign: "center", my: 3 }}>
            {resepsi.tanggal.split(" ").map((text, key) => (
              <TextMask key={key} variants={textVariants}>
                {text}
              </TextMask>
            ))}
          </Typography>

          <Divider />
        </Grid>

        <Grid item md={6} xs={12}>
          <CardTanggal
            title="Akad Nikah"
            tanggal={akad.tanggal}
            jam={akad.jam}
            lokasi={akad.lokasi}
            alamat={akad.alamat}
            link={akad.gmaps.link}
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <CardTanggal
            title="Resepsi Nikah"
            tanggal={resepsi.tanggal}
            jam={resepsi.jam}
            lokasi={resepsi.lokasi}
            alamat={resepsi.alamat}
            link={resepsi.gmaps.link}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tanggal;
