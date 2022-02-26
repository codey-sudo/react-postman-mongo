require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// import routes
const authRoute = require("./routes/auth");
const ToDosRoute = require("./routes/todos");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.get("/api", (req,res) => {
    res.send("Fullstack React Course Server");
})



app.use("/api/auth", authRoute);
app.use("/api/todos", ToDosRoute);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('connected to database')

    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log(error);
});

