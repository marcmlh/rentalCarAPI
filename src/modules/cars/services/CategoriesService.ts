// A Service é a segunda camada em nossa Cronicas de Narnia na API, é aqui onde as regras de negócio são implementadas, e por regra de negócio você entende o que é? To perguntando pra você. Ela recebe as informações das rotas e repassam/comunicam-se com os repositórios. Começamos definindo os nossos métodos.
import { Category } from "../entities/Category";
import { parse as csvParse } from "csv-parse";
import fs from "fs";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { AppError } from "../../../helpers/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CategoriesService {
  constructor(@inject("CategoriesRepository") private categoryRepository: CategoriesRepository) {}

  async create(name: string, description: string): Promise<Category> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("Category Already Exists.");
    }

    const category = await this.categoryRepository.create(name, description);

    return category;
  }

  async findByName(name: string): Promise<Category> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(
      name
    );

    if (!categoryAlreadyExists) {
      throw new AppError("Category not found.");
    }

    return categoryAlreadyExists;
  }

  async list(): Promise<Category[]> {
    const listCategories = await this.categoryRepository.list();
    return listCategories;
  }

  /*
  loadCategories(file: Express.Multer.File) {
    // Transofrmação do arquivo e adicionar no banco   -- ESPERAR
    return new Promise<Category[]>((resolve, reject) => {
      // VARIÁS COISAS ACONTECENDO
      const stream = fs.createReadStream(file.path);
      const parseFile = csvParse();

      stream.pipe(parseFile);

      const importCategories: Category[] = [];
      parseFile
        .on("data", async (line) => {
          const [name, description] = line;

          const categoryAlreadyExists =
            this.categoryRepository.findByName(name);

          if (!categoryAlreadyExists) {
            const category = new Category();
            Object.assign(category, { name, description });
            this.categoryRepository.create(category);
            importCategories.push(category);
          }
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(importCategories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }
  */
  /*
  async import(file: Express.Multer.File): Promise<Category[]> {
    const importCategories = await this.loadCategories(file);
    return importCategories;
  }
  */
}

export { CategoriesService };
