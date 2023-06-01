import { Specification } from "../entities/Specification";
import { SpecificationsRepository } from "../repositories/SpecificationsRepository";

class SpecificationService {
  constructor(private specificationsRepository: SpecificationsRepository) {}
  create(specification: Specification) {
    const specificationAlreadyExists = this.specificationsRepository.findByName(
      specification.name
    );
    if (specificationAlreadyExists) {
      throw new Error("Specification Already Exists.");
    }

    this.specificationsRepository.create(specification);
  }
  findByName(name: string): Specification {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);
    if (!specificationAlreadyExists) {
      throw new Error("Specification not found.");
    }
    return specificationAlreadyExists;
  }

  list(): Specification[] {
    const listSpecifications = this.specificationsRepository.list();
    return listSpecifications;
  }
}

export { SpecificationService };
