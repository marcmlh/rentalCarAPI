// As rotas serão a porta de entrada da nossa API. É nessa camada em que a gente define o tipo da rota, POST, PUT, GET, DELETE. Geralmente, elas irão enviar as informações recebidas pelo front para a camada da Service. A primeira coisa que ela usa é o metodo do express.

import { Router } from "express";
import multer from "multer";
import { CategoriesController } from "../modules/cars/controller/categories/CategoriesController";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
})

const categoriesController = new CategoriesController();

categoriesRoutes.post("/", async (request, response) => {
  return await categoriesController.create(request, response);
});

// categoriesRoutes.post("/import", upload.single("file"), async (request, response) => {
//   return await categoriesController.import(request, response);
// });

categoriesRoutes.get("/", async (request, response) => {
  return await categoriesController.list(request, response);
});``
 
categoriesRoutes.get("/findByName", async (request, response) => {
  return await categoriesController.findByName(request, response);
});


export { categoriesRoutes };
