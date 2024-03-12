const express = require("express");
const path = require("path");
const userRoute = require('./routes/user');
const cookiepaser = require('cookie-parser')

const mongoose = require("mongoose");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

const app = express();
const PORT =8000;

mongoose.connect('mongodb://localhost:27017/blogify').then(e => console.log('Mongodb connected'));



// Middleware
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));



app.use(express.urlencoded({extended: false }));
app.use(cookiepaser());
app.use(checkForAuthenticationCookie("token"));

//routes
app.get('/', (req, res) =>{
    res.render("home", {
        user: req.user,
    });
})



app.use('/user', userRoute);


app.listen(PORT, () => console.log(`Server will be started at PORT:${PORT}`));