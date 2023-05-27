//EXPRESSJS
const express = require("express");


const app = express();


app.get("/api", () => {
    console.log("Mern Stack");
});


const PORT = 5000;


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});