import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
} from "@mui/material";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsAppSend = () => {
    const { name, email, message } = form;
    const phoneNumber = "918766971902";
    const text = `Hello, I'm ${name}\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  ;

  return (
    <Box sx={{ flexGrow: 1, padding: 4, backgroundColor: "black"}} id="contacts">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={3} display="flex" justifyContent="center">
          <Box
            component="img"
            src="/assets/Mention.gif"
            alt="Left Illustration"
            sx={{ width: "100%", maxWidth: "410px" }}
          />
        </Grid>

        <Grid item xs={12} md={6} sx={{background: 'transparent'}}>
          <Paper elevation={4} sx={{ padding: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Contact Me
            </Typography>
            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                multiline
                rows={4}
                variant="outlined"
                fullWidth
              />
              <Button
                variant="contained"
                size="large"
                sx={{ mt: 2 }}
                onClick={handleWhatsAppSend}
              >
                Send via WhatsApp
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3} display="flex" justifyContent="center">
          <Box
            component="img"
            src="/assets/Contact.gif"
            alt="Right Illustration"
            sx={{ width: "100%", maxWidth: "410px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
