
const express = require("express")
const route = express.Router()
const homeController = require('./controllers/HomeController')
const animalController = require('./controllers/AnimalController')


route.get("/", homeController.paginaInicial)
route.get("/animais", animalController.paginaInicial)
route.get("/animais/:id", animalController.animalEspecifico)

module.exports = route