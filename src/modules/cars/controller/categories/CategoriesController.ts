import { Request, Response } from "express";
import { CategoriesService } from "../../services/CategoriesService";
import { Category } from "../../entities/Category";

class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const category = await this.categoriesService.create(name, description);

    return response.status(201).json({ data: category });
  }

  async list(request: Request, response: Response): Promise<Response> {
    const listCategories = await this.categoriesService.list();
    return response.status(200).json({ data: listCategories });
  }

  async findByName(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const category = await this.categoriesService.findByName(name);

    return response.status(200).json({ data: category });
  }

  /*
  async import(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importCategories = await this.categoriesService.import(file);
    
    return response.status(200).json({data: importCategories});
  }
  */
}

export { CategoriesController };
