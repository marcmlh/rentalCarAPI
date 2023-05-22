import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CategoriesService } from "../../services/CategoriesService";
import { CategoriesController } from "./CategoriesController";



const categoriesRepository = new CategoriesRepository();

const categoriesService = new CategoriesService(categoriesRepository);

const categoriesController = new CategoriesController(categoriesService);

export { categoriesController };