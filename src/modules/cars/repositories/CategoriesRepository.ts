// O Repositorio é a terceira e ultima camada de nossa API, geralmente, recebe informações da Service. É nessa camada onde é feita a comunicação com o nosso Banco de Dados, e portanto, é onde estão definidas as nossas QUERYs e conexão com o Banco.

import { Category } from "../models/Category";

class CategoriesRepository {
  categories: Category[];
  constructor() {
    this.categories = [];
  }

  create(category: Category) {
    this.categories.push(category);
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }

  list(): Category[] {
    return this.categories;
  }
}

export { CategoriesRepository };
