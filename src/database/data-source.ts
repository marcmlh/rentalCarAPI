import { DataSource } from "typeorm";
import { Categories1685638103459 } from "./migrations/1685638103459-Categories";
import { Category } from "../modules/cars/entities/Category";

export const dataSource = new DataSource({
  type: "postgres",
  port: 5432,
  username: "marcelo",
  password: "1234",
  database: "rentalscar",
  entities: [Category],
  migrations: [Categories1685638103459],
});

/*
dataSource.initialize().then(async () => {
  console.log("Initializing the database...")
}).catch((err)=> console.log(err))
*/

export function createConnection(host = "database_rentalscar") { // Aqui caso estejamos rodando o projeto no docker, como estamos fazendo o link dos dois containers rentx e database para que a API entenda o nome do container e consiga se comunicar em IP's diferentes, iremos passar o nome do database conforme definido no link do docker-compose. Caso rodemos o projeto localmente e não no container será passado como localhost
  dataSource
    .setOptions({ host })
    .initialize()
    .then(() => {
      console.log("Database was initiliazed...");
    })
    .catch((error) => {
      console.log(`Connection error: ${error}`);
    });
}