import { Box, IconButton } from "@mui/material";
import React from "react";
import PlayArrowTwoToneIcon from "@mui/icons-material/PlayArrowTwoTone";
import PauseTwoToneIcon from "@mui/icons-material/PauseTwoTone";
import { motion } from "framer-motion";
import { transition, parentVariants } from "@/animation/transition";

/**
 *
 * @returns React.ReactElement
 */
const Backsound = () => {
  const audioRef = React.useRef(null);
  const [isPlay, setPlay] = React.useState(false);

  /**
   * Fungsi toggle button
   */
  const toggleAudio = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlay((prevState) => !prevState);
  };

  /**
   * Auto play musik
   */
  React.useEffect(() => {
    const playPromise = audioRef.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setPlay(true);
        })
        .catch(() => {
          setPlay(false);
        });
    }
  }, [audioRef]);

  return (
    <Box
      component={motion.div}
      initial={{
        opacity: 0,
        x: "-100%",
      }}
      animate={{
        opacity: 1,
        x: 1,
        transition,
      }}
      exit={{
        opacity: 0,
      }}
      boxShadow={8}
      sx={{
        position: "fixed",
        zIndex: 1000,
        top: "50%",
        left: 10,
        transform: "translateY(-50%)",
        backgroundColor: "rgba(213, 206, 163, 0.7)",
        borderRadius: "50%",
        p: 0.75,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <audio
        ref={audioRef}
        component="audio"
        preload="true"
        loop
        autoPlay={true}
        style={{ display: "none" }}
      >
        <source src="/assets/audio/backsound.mp3" type="audio/mp3" />
      </audio>

      <IconButton
        onClick={toggleAudio}
        color="secondary"
        sx={{ backgroundColor: "text.primary" }}
      >
        {isPlay ? <PauseTwoToneIcon /> : <PlayArrowTwoToneIcon />}
      </IconButton>
    </Box>
  );
};

export default Backsound;
