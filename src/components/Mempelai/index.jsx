import useDB from "@/hooks/useDB";
import { Box, Stack } from "@mui/material";
import React from "react";
import ProfilMempelai from "./ProfilMempelai";

/**
 * Komponent mempelai
 *
 * @returns React.ReactElement
 */
const Mempelai = () => {
  const { wanita, pria } = useDB((db) => db.wedding.mempelai);
  return (
    <Box>
      <ProfilMempelai mempelai={pria} />
      <ProfilMempelai mempelai={wanita} />
    </Box>
  );
};

export default Mempelai;
