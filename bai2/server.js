const express = require("express");
const { default: mongoose } = require("mongoose");
const { inventorRoute } = require("./router/inventor-router");
const userRouter = require("./router/user-router");
const verifyTokenMiddleware = require("./middleware/user-middleware");
const orderRoute = require("./router/oder-router");
const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/test")

app.use("/api/inventors",verifyTokenMiddleware,inventorRoute);
app.use("/api/order",orderRoute);
app.use("/api/users",userRouter);
app.listen(8008,()=>{
    console.log("server running in port 8008");
})