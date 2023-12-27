import { Box, Container, Stack, Typography } from "@mui/material";
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from "react";

const Main = () => {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  
  return (
    <Container>
      <Stack direction={"row"}
      alignItems={"center"}
       justifyContent={"space-between"}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>
        <ToggleButtonGroup
          color="error"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton className="myButton" value="left" aria-label="left aligned">
            All Products
          </ToggleButton>
          <ToggleButton className="myButton" value="center" aria-label="centered">
            Men Category
          </ToggleButton>
          <ToggleButton className="myButton" value="right" aria-label="right aligned">
            Women Category
          </ToggleButton>
         
        </ToggleButtonGroup>
      </Stack>
    </Container>
  );
};

export default Main;
