const express = require('express');
const app = express();
const path = require('path');

const publicDirectory = path.join(__dirname, 'public');

// middleware to serve static files
app.use(express.static(publicDirectory));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
