import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

const Links = () => {
  return (
    <Box
      sx={{
        ":hover .show-when-hover": { display: "block" },
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="body1">Home</Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

      <Box
        className="show-when-hover"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          left: "50%",
          transform: " translateX(-50%)",
          display: "none",
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{display:"flex"}}>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="Trash"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="Trash"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="Trash"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="Trash"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;
