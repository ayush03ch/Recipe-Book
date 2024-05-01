const express = require('express');
const app = express();
const path = require('path');

// paths to static files 
const cssPath = path.join(__dirname, 'css');
const jsPath = path.join(__dirname, 'js');
const assetsPath = path.join(__dirname, 'assets');

app.use('/css', express.static(cssPath));
app.use('/js', express.static(jsPath));
app.use('/assets', express.static(assetsPath));

// Serve HTML files
app.get('/:pageName', (req, res) => {
    const pageName = req.params.pageName;
    const filePath = path.join(__dirname, `${pageName}`);
    res.sendFile(filePath);
});

// Serve index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
