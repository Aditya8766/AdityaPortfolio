import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [tiltIndex, setTiltIndex] = useState(null);

  const info = [
    { label: "Full Name", value: "Aditya Mukund Bhosale" },
    { label: "Address", value: "Pune, Maharashtra, India" },
    { label: "Email", value: "aditya.bhosale7517@gmail.com" },
    { label: "Phone", value: "+91 8766971902" },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }} id="about">
      <Grid
        container
        spacing={isMobile ? 9 : 6}
        direction={isMobile ? "column" : "row"}
        alignItems="flex-start"
      >
        <Grid item xs={12} md={5}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ textAlign: isMobile ? "center" : "left", mb: 2 }}
          >
            Personal Info
          </Typography>

          <Grid container spacing={2}>
            {info.map((item, index) => {
              const tiltDirection = index % 2 === 0 ? -5 : 5;
              const isTilted = tiltIndex === index;

              return (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={3}
                    onTouchStart={() => setTiltIndex(index)}
                    onTouchEnd={() => setTiltIndex(null)}
                    sx={{
                      p: 2,
                      backgroundColor: "#f9f9f9",
                      borderRadius: 2,
                      height: "100%",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      transformOrigin: "center",
                      transform: isTilted
                        ? `rotate(${tiltDirection}deg)`
                        : "rotate(0deg)",
                      "&:hover": {
                        transform: `rotate(${tiltDirection}deg)`,
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      sx={{ fontSize: "0.85rem" }}
                    >
                      {item.label}
                    </Typography>
                    <Typography variant="body1">{item.value}</Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ textAlign: isMobile ? "center" : "left", mb: 2 }}
          >
            Welcome
          </Typography>

          <Box
            sx={{
              px: isMobile ? 1 : 3,
              textAlign: isMobile ? "justify" : "left",
            }}
          >
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Welcome to my portfolio website! I'm a developer, programmer, and
              tech enthusiast residing in Pune. My passion lies in creating
              exceptional digital experiences, with a strong affinity for
              JavaScript and React.js. These technologies allow me to build
              dynamic and interactive web applications that engage users.
              <br />
              <br />
              In addition to coding, I stay engaged with tech-related activities
              and continuous learning. Attending conferences like Next.js Conf
              helps me stay updated on the latest trends. Freelancing as a
              Frontend Developer has sharpened my skills in building responsive
              web applications. I enjoy collaborating on innovative projects,
              participating in tech quizzes, and exploring new technologies.
              Let’s connect and create impactful digital experiences together.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
