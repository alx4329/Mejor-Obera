const express = require("express")
var cors = require("cors");
require("dotenv").config();
const multer = require("multer");
const morgan = require("morgan");
const fileUpload = require('express-fileupload')
const app = express();

app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies
app.use(cors());
app.use(fileUpload({useTempFiles:true}))
/*Routers used*/
const userRoutes = require('./routes/userRoutes')
const commerceRoutes = require('./routes/commerceRoutes')
/* middleware */
const authMiddleware = require('./middleware/auth')
app.use(morgan("dev"));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
/*Routes*/
app.use('/user',userRoutes)
app.use('/commerce',authMiddleware,commerceRoutes)

app.use(function (_, res) {
    res.json({ status: "inexistent route" });
  });

  module.exports =app