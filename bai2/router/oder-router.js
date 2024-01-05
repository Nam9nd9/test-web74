const { getOders } = require("../controller/order-controller");

const orderRoute = require("express").Router();

orderRoute.get("/",getOders)

module.exports = orderRoute;