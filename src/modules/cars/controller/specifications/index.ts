import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { SpecificationService } from "../../services/SpecificationsService";
import { SpecificationController } from "./SpecificationsController";


const specificationsRepository = new SpecificationsRepository();
const specificationsService = new SpecificationService(specificationsRepository);
const specificationsController = new SpecificationController(specificationsService);

export {specificationsController};