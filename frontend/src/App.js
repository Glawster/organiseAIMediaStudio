import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          organiseAIMediaStudio
        </Typography>
        <Typography variant="h6" gutterBottom>
          Welcome! Upload your photos or videos and start creating AI-powered montages or edits.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
}

export default App;