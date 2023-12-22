import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import WindowIcon from "@mui/icons-material/Window";
import { Box, Button, Container, Menu, Typography, useTheme } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
const Header3 = () => {
    const [anchorEl, setAnchorEl] =useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const theme = useTheme()
  return (
    <Container>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{width:222}}
      >
        <WindowIcon />
        <Typography  
           sx={{
            padding:"0",
            textTransform:"capitalize",
            mx:1,
           }}
        >
            Categories
        </Typography>
        <Box flexGrow={1} />
        <KeyboardArrowRightOutlined />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Container>
  );
};

export default Header3;
