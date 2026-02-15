// serverScript.js
import express from "express";
import path from "path";
import cors from "cors";
import detect from "./detect.js"; // your detection logic
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // serve index.html, script.js, style.css

// Route for homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// API route for scanning URLs
app.post("/check", (req, res) => {
  try {
    const { url, type } = req.body;
    if (!url || !type) {
      return res.status(400).json({ error: "URL or type missing" });
    }

    const result = detect(url, type); // call your detect.js logic
    res.json(result);
  } catch (err) {
    console.error("Error in /check route:", err);
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
