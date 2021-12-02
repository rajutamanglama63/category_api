const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const createCategoryRoute = require("./routes/category");

dotenv.config();

const app = express();

const Port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/category", createCategoryRoute);

app.listen(Port, () => {
    console.log(`Server running on port http://localhost:${Port}`);
});