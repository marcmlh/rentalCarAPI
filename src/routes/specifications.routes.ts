import { Router } from "express";
import { Specification } from "../modules/cars/models/Specification";
import { SpecificationService } from "../modules/cars/services/SpecificationsService";

const specificationsRoutes = Router();
const specificationsService = new SpecificationService();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const specification = new Specification();

  Object.assign(specification, { name, description });

  specificationsService.create(specification);

  return response.status(201).json({ data: specification });
});

specificationsRoutes.get("/", (request, response) => {
  const listSpecifications = specificationsService.list();

  return response.status(200).json({ data: listSpecifications });
});

specificationsRoutes.get("/findByName", (request, response) => {
    const {name} = request.body;
    
    const specification = specificationsService.findByName(name);

    return response.status(200).json({ data: specification });
  });

export { specificationsRoutes };
