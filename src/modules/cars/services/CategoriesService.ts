// A Service é a segunda camada em nossa Cronicas de Narnia na API, é aqui onde as regras de negócio são implementadas, e por regra de negócio você entende o que é? To perguntando pra você. Ela recebe as informações das rotas e repassam/comunicam-se com os repositórios. Começamos definindo os nossos métodos.
import { Category } from "../models/Category";
import { parse as csvParse } from "csv-parse";
import fs from "fs";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

class CategoriesService {
  constructor(private categoryRepository: CategoriesRepository) {}

  create(name: string, description: string) {
    const category = new Category();
    Object.assign(category, { name, description });

    const categoryAlreadyExists = this.categoryRepository.findByName(
      category.name
    );

    if (categoryAlreadyExists) {
      throw new Error("Category Already Exists.");
    }

    this.categoryRepository.create(category);
  }

  findByName(name: string): Category {
    const categoryAlreadyExists = this.categoryRepository.findByName(name);

    if (!categoryAlreadyExists) {
      throw new Error("Category not found.");
    }

    return categoryAlreadyExists;
  }

  list(): Category[] {
    const listCategories = this.categoryRepository.list();
    return listCategories;
  }

  loadCategories(file: Express.Multer.File) {
    // Transofrmação do arquivo e adicionar no banco   -- ESPERAR
    var minhaPromise = new Promise<Category[]>((resolve, reject) => {
      // VARIÁS COISAS ACONTECENDO
      const stream = fs.createReadStream(file.path);
      const parseFile = csvParse();

      stream.pipe(parseFile);

      const importCategories: Category[] = [];
      parseFile.on("data", async (line) => {
        const [name, description] = line;

        const categoryAlreadyExists = this.categoryRepository.findByName(name);

        if (!categoryAlreadyExists) {
          const category = new Category();
          Object.assign(category, { name, description });
          this.categoryRepository.create(category);
          importCategories.push(category);
        }
      })
      .on("end", ()=>{
        resolve(importCategories);
      })
      .on("error", (err) => {
        reject(err);
      });
    });

    return minhaPromise
  }

  async import(file: Express.Multer.File){
  await this.loadCategories(file);
  }
}

export { CategoriesService };
