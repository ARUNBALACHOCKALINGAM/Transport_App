const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors  = require("cors")
dotenv.config()
app.use(cors())
/*express.urlencoded() is a method inbuilt in express to recognize
 the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code*/
app.use(express.urlencoded({ extended: false }))
/*express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. 
This method is called as a middleware in your application using the code: app.use(express.json());*/
app.use(express.json())
app.use("/", require("./routes"))



module.exports = app