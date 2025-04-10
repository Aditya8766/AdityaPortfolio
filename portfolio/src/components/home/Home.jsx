import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const titles = [
  { text: "Programmer", icon: <CodeIcon sx={{ ml: 1 }} /> },
  { text: "Frontend Developer", icon: <ComputerIcon sx={{ ml: 1 }} /> },
  { text: "Full Stack Dev", icon: <StorageIcon sx={{ ml: 1 }} /> },
  { text: "Learner", icon: <SchoolIcon sx={{ ml: 1 }} /> },
];

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[titleIndex].text;
    if (letterIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentTitle[letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTitleIndex((titleIndex + 1) % titles.length);
        setDisplayText("");
        setLetterIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [letterIndex, titleIndex]);

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }} id="home">
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/assets/bannerVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          px: { xs: 2, md: 8 },
          py: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgba(255, 255, 255, 0.75)",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ color: "#512da8" }}>
            Hello 👋 I'm
          </Typography>

          <Typography
            variant="h3"
            sx={{ color: "#1976d2", fontWeight: "bold", letterSpacing: 1 }}
          >
            Aditya Mukund Bhosale
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mt: 2,
              color: "#ff5722",
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            {displayText}
            {titles[titleIndex].icon}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: 4,
              color: "#424242",
              maxWidth: "90%",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            As a passionate web developer and programmer, I'm
            dedicated to bringing your digital ideas to life. I strive to craft
            innovative solutions that make a lasting impact. Let's collaborate
            and build the future of the web together.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: 4,
            }}
          >
            <Typography sx={{ color: "#333", fontWeight: 500 }}>
              Check out my
            </Typography>

            <a
              href="https://github.com/Aditya8766"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  borderRadius: "50%",
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "#1565c0",
                  },
                }}
              >
                <GitHubIcon />
              </Box>
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-bhosale-107682249/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  borderRadius: "50%",
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "#1565c0",
                  },
                }}
              >
                <LinkedInIcon />
              </Box>
            </a>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            mt: { xs: 4, md: 0 },
          }}
        >
            <CardMedia
              component="img"
              image="/assets/myImg.png"
              alt="Profile"
              sx={{ objectFit: "cover", width: '70%' }}
            />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
