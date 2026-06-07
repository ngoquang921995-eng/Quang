const express = require('express');
const path = require('path');
const app = express();

// Use the dynamic port assigned by Railway, fallback to 8080 for local testing
const PORT = process.env.PORT || 8080;

// Serve all static assets from the root directory
app.use(express.static(path.join(__dirname)));

// Route all requests to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
