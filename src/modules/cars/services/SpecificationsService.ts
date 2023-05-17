import { Specification } from "../models/Specification";
import { SpecificationsRepository } from "../repositories/SpecificationsRepository";

const specificationsRepository = new SpecificationsRepository();

class SpecificationService {
  create(specification: Specification) {
    specificationsRepository.create(specification);
  }

  findByName(name: string): Specification {
    const specificationAlreadyExists =
      specificationsRepository.findByName(name);
    if (!specificationAlreadyExists) {
      throw new Error("Specification not found.");
    }
    return specificationAlreadyExists;
  }

  list(): Specification[]{
    const listSpecifications = specificationsRepository.list();
    return listSpecifications;
  }
}

export { SpecificationService };
