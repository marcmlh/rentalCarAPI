import { Repository } from "typeorm";
import { Specification } from "../entities/Specification";
import { dataSource } from "../../../database/data-source";

class SpecificationsRepository {
  private repository: Repository<Specification>;
  constructor() {
    this.repository = dataSource.getRepository(Specification);
  }

  async create(name: string, description: string): Promise<Specification> {
    const specification = this.repository.create({ name, description });

    await this.repository.save(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOneBy({ name });

    return specification;
  }


  async list(): Promise<Specification[]> {
    const specification = await this.repository.find();

    return specification;
  }
}

export { SpecificationsRepository };
