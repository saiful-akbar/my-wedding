import useDB from "@/hooks/useDB";
import { Box, Container } from "@mui/material";
import React from "react";

/**
 *
 * @returns React.ReactElement
 */
const Lokasi = () => {
  const { gmaps } = useDB((db) => db.wedding.resepsi);
  return (
    <Box
      sx={{
        py: 15,
        backgroundColor: "text.secondary",
      }}
    >
      <Container>
        <Box
          component="iframe"
          owfullscreen=""
          loading="lazy"
          rrerpolicy="no-referrer-when-downgrade"
          src={gmaps.iframeSrc}
          sx={{
            width: "100%",
            height: { md: 450, xs: 350 },
            border: 0,
            borderColor: "divider",
            borderRadius: 3,
          }}
        />
      </Container>
    </Box>
  );
};

export default Lokasi;
