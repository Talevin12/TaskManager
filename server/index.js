const express = require("express");
require("dotenv").config();

const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();

app.use(cors());

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
