import useDB from "@/hooks/useDB";
import { Box } from "@mui/material";

/**
 * Galeri
 *
 * @returns React.ReactElement
 */
const Galeri = () => {
  const { galeri } = useDB((db) => db);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "text.primary",
        overflow: "hidden",
        py: {
          md: 30,
          xs: 15,
        },
      }}
    >
      <Box id="boxImage">
        {galeri.map((src, key) => (
          <Box key={key} component="span" style={{ "--i": key + 1 }}>
            <Box component="img" src={src} alt={`Galery ${key + 1}`} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Galeri;
