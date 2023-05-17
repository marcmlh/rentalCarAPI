import { Specification } from "../models/Specification";

class SpecificationsRepository {
  specifications: Specification[];
  constructor() {
    this.specifications = [];
  }

  create(specification: Specification) {
    this.specifications.push(specification);
  }

  findByName(name: string) {
    const specification = this.specifications.find(
      (name) => specification.name === name
    );
    return specification;
  }

  list(): Specification[] {
    return this.specifications;
  }
}

export { SpecificationsRepository };
