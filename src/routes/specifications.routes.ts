import { Router } from "express";
import { specificationsController } from "../modules/cars/controller/specifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return specificationsController.create(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  return specificationsController.list(request, response);
});

specificationsRoutes.get("/findByName", (request, response) => {
  return specificationsController.findByName(request, response);
});

export { specificationsRoutes };
