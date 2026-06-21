// app.js
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

const app = express();

// Core middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "User Management System API is running",
  });
});

// API routes
app.use("/api/users", userRoutes);

// Error handling middlewares (must be last)
app.use(notFound);
app.use(errorHandler);

module.exports = app;
