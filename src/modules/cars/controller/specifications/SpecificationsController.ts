import { Request, Response } from "express";
import { Specification } from "../../models/Specification";
import { SpecificationService } from "../../services/SpecificationsService";

class SpecificationController {
  constructor(private specificationsService: SpecificationService) {}
  create(request: Request, response: Response) {
    const { name, description } = request.body;

    const specification = new Specification();

    Object.assign(specification, { name, description });

    this.specificationsService.create(specification);

    return response.status(201).json({data: specification});
  }

  findByName(request: Request, response: Response) {
    const { name } = request.body;

    const specification = this.specificationsService.findByName(name);

    return response.status(200).json({ data: specification });

  }

  list(request: Request, response: Response) {
    const listSpecifications = this.specificationsService.list();
    return response.status(200).json({ data: listSpecifications });
  }
}

export{SpecificationController};