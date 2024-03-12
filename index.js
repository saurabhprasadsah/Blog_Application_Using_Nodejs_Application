const express = require("express");
const path = require("path");
const app = express();
const userRoute = require('./routes/user');

const PORT =8000;



// Middleware
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


//routes
app.get('/',(req, res) =>{
    res.render("home");
})

app.use('/user', userRoute);


app.listen(PORT, () => console.log(`Server will be started at PORT:${PORT}`));