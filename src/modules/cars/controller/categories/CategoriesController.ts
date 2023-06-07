import { Request, Response } from "express";
import { CategoriesService } from "../../services/CategoriesService";
import { Category } from "../../entities/Category";
import { container } from "tsyringe";

class CategoriesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const categoriesService = container.resolve(CategoriesService);

    const category = await categoriesService.create(name, description);

    return response.status(201).json({ data: category });
  }

  async list(request: Request, response: Response): Promise<Response> {
    const categoriesService = container.resolve(CategoriesService);
    const listCategories = await categoriesService.list();
    return response.status(200).json({ data: listCategories });
  }

  async findByName(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const categoriesService = container.resolve(CategoriesService);
    const category = await categoriesService.findByName(name);

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
