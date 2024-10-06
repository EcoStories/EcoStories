const express = require('express');
const app = express();
const path = require('path');

// Servir archivos estáticos con prefijos /css, /js, e /img
app.use('/css', express.static(path.join(__dirname, 'src', 'assets', 'css')));
app.use('/js', express.static(path.join(__dirname, 'src', 'assets', 'js')));
app.use('/img', express.static(path.join(__dirname, 'src', 'assets', 'img')));

// Ruta general para archivos en /views
app.get('/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(path.join(__dirname, 'src', 'views', filename));
});

// Escuchar en el puerto 3000
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
