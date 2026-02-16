const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
const authMiddleware = require("./middleware/auth.middleware");

const app = express();

app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("DB connection error:", err));

// Auth routes
app.use("/api/auth", authRoutes);

// Protected route
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ message: "Access granted", user: req.user });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});