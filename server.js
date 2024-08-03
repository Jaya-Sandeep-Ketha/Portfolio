const express = require('express');
const app = express();
const port = 8080;

// Serve static files from the root directory
app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
