import { Specification } from "../entities/Specification";
import { SpecificationsRepository } from "../repositories/SpecificationsRepository";

class SpecificationService {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  async create(name: string, description: string): Promise<Specification> {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification Already Exists.");
    }

    const specification = await this.specificationsRepository.create(name, description);

    return specification
  }

  async findByName(name: string): Promise<Specification> {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (!specificationAlreadyExists) {
      throw new Error("Specification not found.");
    }
    return specificationAlreadyExists;
  }

  async list(): Promise<Specification[]> {
    const listSpecifications = await this.specificationsRepository.list();
    return listSpecifications;
  }
}

export { SpecificationService };
