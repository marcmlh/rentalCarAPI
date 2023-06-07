import { container } from "tsyringe";
import { CategoriesRepository } from "../../modules/cars/repositories/CategoriesRepository";

container.registerSingleton<CategoriesRepository>("CategoriesRepository",CategoriesRepository)
