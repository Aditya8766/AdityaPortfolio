import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const projectData = [
  {
    title: "Movie Heist App",
    image: "/assets/movie.png",
    description:
      "A React-based movie app allowing users to select, favorite, and view movies in a modal.",
  },
  {
    title: "Expense Tracker",
    image: "/assets/MoneyManage.png",
    description:
      "Money manager built with React to track income vs expenses using local storage.",
  },
  {
    title: "Dcument Analyzer",
    image: "/assets/docAnalyzer.png",
    description:
      "Analyze pdf documents find out by keywords and count keywords",
  },
  {
    title: "Personal Website",
    image: "/assets/personalWebsite.png",
    description:
      "Developed personal portfolio for showcasing my experience projects and how to reach me.",
  },
  {
    title: "Coaching Class Management",
    image: "/assets/coachingClass.png",
    description:
      "Developed and maintained seamless end to end project of coaching class management which is full stack",
  },
  {
    title: "Meta Assignment",
    image: "/assets/app.png",
    description:
      "Soved React native assignment of meta facebook made app in expo and understood all topics of recat native carefull added test cases with react native testing library",
  },
];

const Projects = () => {
  return (
    <Box
    id="projects"
      sx={{
        px: { xs: 2, md: 8 },
        py: 6,
        bgcolor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: "bold",
          textAlign: "center",
          color: "#BA68C8",
        }}
      >
        My Projects
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {projectData.map((project, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: "100%", sm: "45%", md: "30%" },
              minWidth: 280,
              maxWidth: 360,
              display: "flex",
              flexDirection: "column",
              boxShadow: 4,
              minHeight: 350,
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={project.image}
              alt={project.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;