import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from '@mui/icons-material/Code';

const navLinks = ["Home", "About", "Resume", "Projects", "Contacts"];

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpenDrawer(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CodeIcon style={{marginRight: '0.5rem'}}/>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: "flex", alignItems: "center" }}
            >
              By Aditya ❤️
            </Typography>
          </Box>

          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navLinks.map((link) => (
                <Button
                  key={link}
                  color="inherit"
                  onClick={() => handleScrollToSection(link)}
                >
                  {link}
                </Button>
              ))}
            </Box>
          ) : (
            <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 250,
            zIndex: (theme) => theme.zIndex.appBar + 1, // Ensures drawer is above AppBar
          },
        }}
      >
        <List>
          {navLinks.map((text) => (
            <ListItem
              button
              key={text}
              onClick={() => handleScrollToSection(text)}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
