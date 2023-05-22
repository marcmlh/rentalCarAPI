// As rotas serão a porta de entrada da nossa API. É nessa camada em que a gente define o tipo da rota, POST, PUT, GET, DELETE. Geralmente, elas irão enviar as informações recebidas pelo front para a camada da Service. A primeira coisa que ela usa é o metodo do express.

import { Router } from "express";
import multer from "multer";
import { categoriesController } from "../modules/cars/controller/categories";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
})

categoriesRoutes.post("/", (request, response) => {
  return categoriesController.create(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return categoriesController.import(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return categoriesController.list(request, response);
});

categoriesRoutes.get("/findByName", (request, response) => {
  return categoriesController.findByName(request, response);
});


export { categoriesRoutes };
