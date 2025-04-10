import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DownloadIcon from "@mui/icons-material/Download";

const skills = [
  { name: "HTML5", value: 10 },
  { name: "CSS3", value: 10 },
  { name: "JavaScript", value: 15 },
  { name: "React JS", value: 20 },
  { name: "Node JS", value: 15 },
  { name: "Express", value: 10 },
  { name: "MongoDB", value: 10 },
  { name: "Angular", value: 10 },
];

const COLORS = [
  "#FF7043",
  "#4FC3F7",
  "#81C784",
  "#BA68C8",
  "#FFD54F",
  "#4DD0E1",
  "#AED581",
  "#F06292",
];

const Resume = () => {
  return (
    <Box
    id="resume"
      sx={{
        px: { xs: 2, md: 8 },
        py: 6,
        bgcolor: "#1976D2",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold", color: "#fff" }}>
        My Resume
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: "#E3F2FD" }}>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: "#0D47A1" }}>
                Experience
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#1976D2" }}>
                  Frontend Developer – Praise Array
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  2023 – Present
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#333" }}>
                  Built modern UIs using React.js, enhanced app performance, and collaborated with backend teams to integrate APIs.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: "#E3F2FD" }}>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: "#0D47A1" }}>
                Education
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#1976D2" }}>
                  Master of Computer Applications – Pune University
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  2022 – 2024
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#333" }}>
                  Graduated with 83% specializing in software development, programming, and database systems.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: "#fff" }}>
          My Skill Set
        </Typography>
        <Box sx={{ height: 350, bgcolor: "#1565C0", borderRadius: 2, p: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={skills}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={110}
                label
              >
                {skills.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "#fff", color: "#000" }} />
              <Legend wrapperStyle={{ color: "#fff" }} />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DownloadIcon />}
          href="/resume-aditya.pdf"
          download
          sx={{ fontWeight: 600 }}
        >
          Download Resume
        </Button>
      </Box>
    </Box>
  );
};

export default Resume;
