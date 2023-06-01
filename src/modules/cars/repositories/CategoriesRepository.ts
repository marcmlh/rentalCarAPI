// O Repositorio é a terceira e ultima camada de nossa API, geralmente, recebe informações da Service. É nessa camada onde é feita a comunicação com o nosso Banco de Dados, e portanto, é onde estão definidas as nossas QUERYs e conexão com o Banco.

import { Repository } from "typeorm";
import { Category } from "../entities/Category";
import { dataSource } from "../../../database/data-source";

class CategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = dataSource.getRepository(Category);
  }

  async create(name: string, description: string): Promise<Category> {
    const category = this.repository.create({ name, description });

    await this.repository.save(category);

    return category;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOneBy({ name });

    return category;
  }

  async list(): Promise<Category[]> {
    const category = await this.repository.find();

    return category;
  }
}

export { CategoriesRepository };
