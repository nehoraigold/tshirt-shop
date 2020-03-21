//region imports
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const configs = require('./configs.json');
//endregion

function main() {
    const app = express();
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, 'dist')));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });

    const PORT = process.env["PORT"] || configs.port;

    const server = app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}...`)
    });

    const shutdown = () => {
        server.close();
    };

    process.on("SIGTERM", shutdown);
    process.on("SIGABRT", shutdown);
}

main();