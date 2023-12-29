import { Box, Typography } from "@mui/material";

const ProductDetails = () => {
  return (
    <Box sx={{display:"flex",alignItems:"center"}}>
      <Box>
        <img width={300} src="src\images\1.jpg" alt="" />
      </Box>
      <Box>
        <Typography variant="h5"> WOMEN'S FASHION</Typography>
        <Typography
          my={0.4}
          fontSize={"22px"}
          color={"crimson"}
          variant="body1"
        >
          120DH
        </Typography>
        <Typography variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;
