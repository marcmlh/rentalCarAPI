import { Request, Response } from "express";
import { Specification } from "../../entities/Specification";
import { SpecificationService } from "../../services/SpecificationsService";

class SpecificationController {
  constructor(private specificationsService: SpecificationService) {}

  async create(request: Request, response: Response) {
    const { name, description } = request.body;

    const specification = await this.specificationsService.create(
      name,
      description
    );

    return response.status(201).json({ data: specification });
  }

  async list(request: Request, response: Response): Promise<Response> {
    const listSpecifications = await this.specificationsService.list();
    return response.status(200).json({ data: listSpecifications });
  }

  async findByName(request: Request, response: Response) {
    const { name } = request.body;

    const specification = await this.specificationsService.findByName(name);

    return response.status(200).json({ data: specification });
  }
}

export { SpecificationController };
