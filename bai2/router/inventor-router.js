const { getinventorController, updateinventorController, createinventorController, deleteinventorController, getlowquanti } = require("../controller/inventor-controller");

const inventorRoute = require("express").Router();


inventorRoute.get('/',getinventorController);

inventorRoute.post("/",createinventorController);

inventorRoute.put("/:id",updateinventorController);

inventorRoute.delete("/:id",deleteinventorController);

inventorRoute.get('/lw',getlowquanti);


module.exports = { inventorRoute }