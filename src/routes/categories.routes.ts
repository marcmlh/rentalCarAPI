// As rotas serão a porta de entrada da nossa API. É nessa camada em que a gente define o tipo da rota, POST, PUT, GET, DELETE. Geralmente, elas irão enviar as informações recebidas pelo front para a camada da Service. A primeira coisa que ela usa é o metodo do express.

import { Router } from "express";
import { CategoriesService } from "../modules/cars/services/CategoriesService";
import { Category } from "../modules/cars/models/Category";

const categoriesRoutes = Router();

const categoryService = new CategoriesService();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = new Category();
  Object.assign(category, { name, description });

  categoryService.create(category);

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const listCategories = categoryService.list();
    return response.status(200).json({data: listCategories});
});

categoriesRoutes.get("/findByName", (request, response) => {
  const { name } = request.body;

  const category = categoryService.findByName(name);

  return response.status(200).json({ data: category });
});

export { categoriesRoutes };
