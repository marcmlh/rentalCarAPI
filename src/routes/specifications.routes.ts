import { Router } from "express";
import { specificationsController } from "../modules/cars/controller/specifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", async (request, response) => {
  return await specificationsController.create(request, response);
});

specificationsRoutes.get("/", async (request, response) => {
  return await specificationsController.list(request, response);
});

specificationsRoutes.get("/findByName", async (request, response) => {
  return await specificationsController.findByName(request, response);
});

export { specificationsRoutes };
