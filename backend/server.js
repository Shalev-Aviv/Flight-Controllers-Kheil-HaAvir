require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const DataSchema = new mongoose.Schema({
    HIS: Number,
    ADI: Number,
    Altitude: Number
});

const Data = mongoose.model("Data", DataSchema);

app.post("/api/data", async (req, res) => {
    try {
        const { HIS, ADI, Altitude } = req.body;
        const newData = new Data({ HIS, ADI, Altitude });
        await newData.save();
        res.status(201).json({ message: "Data saved successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/", (req, res) => {
    res.json({ status: "Server is running" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));