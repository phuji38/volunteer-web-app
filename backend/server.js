const express = require("express");
const app = express();

const { readFile } = require('fs').promises;

app.get("/", async (request, response) => {
    response.send( await readFile("./Login/index.html", "utf-8") );
});

app.listen(process.env.PORT || 3000, () => console.log("App available on http://localhost:3000"));

/*
const express = require("express");
const cors = require("cors");
const { readFile } = require("fs").promises;

const app = express();

// Middleware
app.use(express.json()); // Allows backend to parse JSON data
app.use(cors()); // Enables frontend-backend communication

// Serve frontend files (for Login page)
app.get("/", async (req, res) => {
    res.send(await readFile("./Login/index.html", "utf-8"));
});

// Import routes
const adminRoutes = require("./routes/adminRoutes");

// Use routes
app.use("/api/admin", adminRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App available on http://localhost:${PORT}`));
*/