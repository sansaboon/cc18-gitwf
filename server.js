require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");

app.use("/auth", authRoute);
app.use("/user", userRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server on port ", port));
