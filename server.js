const express = require("express");
const config = require("./config");
const formData = require("express-form-data");
const connectDB = require("./db");

const app = express();
const port = config.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const options = { uploadDir: "public/images", autoClean: false };
app.use(formData.parse(options));

connectDB();

app.get("/", (req, res) => res.send("API Running"));
app.use("/api/v1/login", require("./routes/login"));

app.listen(port, () => console.log(`Server Running...`));
