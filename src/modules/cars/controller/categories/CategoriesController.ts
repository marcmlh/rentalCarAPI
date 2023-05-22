import { Request, Response } from "express";
import { CategoriesService } from "../../services/CategoriesService";

class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}
  create(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.categoriesService.create(name, description);

    return response.status(201).send();
  }

  list(request: Request, response: Response): Response {
    const listCategories = this.categoriesService.list();
    return response.status(200).json({ data: listCategories });
  }

  findByName(request: Request, response: Response): Response {
    const { name } = request.body;

    const category = this.categoriesService.findByName(name);

    return response.status(200).json({ data: category });
  }

  import(request: Request, response: Response): Response {
    const { file } = request;

    this.categoriesService.import(file);

    return response.status(200).send();
  }
}

export { CategoriesController };
