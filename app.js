const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipeRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Mounting the recipe routes
app.use("/api/recipes", recipeRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
