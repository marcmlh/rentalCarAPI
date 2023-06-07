import { AppError } from "../../../helpers/AppError";
import { Specification } from "../entities/Specification";
import { SpecificationsRepository } from "../repositories/SpecificationsRepository";

class SpecificationService {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  async create(name: string, description: string): Promise<Specification> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError("Specification Already Exists.");
    }

    const specification = await this.specificationsRepository.create(
      name,
      description
    );

    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (!specificationAlreadyExists) {
      throw new AppError("Specification not found.");
    }
    return specificationAlreadyExists;
  }

  async list(): Promise<Specification[]> {
    const listSpecifications = await this.specificationsRepository.list();
    return listSpecifications;
  }
}

export { SpecificationService };
