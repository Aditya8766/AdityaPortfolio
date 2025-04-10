import { Box, Typography, Link, IconButton, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#111",
        color: "#fff",
        textAlign: { xs: "center", md: "left" },
        py: 4,
        px: 2,
        mt: 6,
        gap: { xs: 3, md: 0 }, 
      }}
    >
      <Box>
        <Typography variant="h6" gutterBottom>
          Aditya's Portfolio
        </Typography>

        <Stack
          direction="row"
          justifyContent={{ xs: "center", md: "flex-start" }}
          spacing={2}
          sx={{ mb: 1 }}
        >
          <Link href="#about" color="inherit" underline="hover">About</Link>
          <Link href="#projects" color="inherit" underline="hover">Projects</Link>
          <Link href="#contact" color="inherit" underline="hover">Contact</Link>
        </Stack>
      </Box>

      <Typography
        variant="body2"
        color="gray"
        sx={{
          textAlign: { xs: "center", md: "center" },
        }}
      >
        &copy; {new Date().getFullYear()} Aditya. All rights reserved.
      </Typography>

      <Stack
        direction="row"
        justifyContent={{ xs: "center", md: "flex-end" }}
        spacing={1}
      >
        <IconButton href="https://github.com/Aditya8766" target="_blank" color="inherit">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/aditya-bhosale-107682249/" target="_blank" color="inherit">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://www.instagram.com/ad_itya6370/?hl=en" target="_blank" color="inherit">
          <InstagramIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Footer;
