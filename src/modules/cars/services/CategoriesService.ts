// A Service é a segunda camada em nossa Cronicas de Narnia na API, é aqui onde as regras de negócio são implementadas, e por regra de negócio você entende o que é? To perguntando pra você. Ela recebe as informações das rotas e repassam/comunicam-se com os repositórios. Começamos definindo os nossos métodos.

import { Category } from "../models/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoryRepository = new CategoriesRepository();

class CategoriesService {
  create(category: Category) {
    const categoryAlreadyExists = categoryRepository.findByName(category.name);

    if (categoryAlreadyExists) {
      throw new Error("Category Already Exists.");
    }

    categoryRepository.create(category);
  }

  findByName(name: string): Category {
    const categoryAlreadyExists = categoryRepository.findByName(name);

    if (!categoryAlreadyExists) {
      throw new Error("Category not found.");
    }

    return categoryAlreadyExists;
  }

  list(): Category[] {
    const listCategories = categoryRepository.list();
    return listCategories;
  }
}

export { CategoriesService };
