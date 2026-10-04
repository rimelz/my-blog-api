const express = require('express'); // 1. load the Express framework module

const app = express(); // 2. instantiate the server application

const PORT = 3000;

// 3. route definition: executed when a client requests GET /

app.get('/', (req, res) => {

    res.json({ message: "Hello, I am the blog API" });

});

// 4. bind and listen: await incoming HTTP requests on port 3000

app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});