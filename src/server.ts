//serve como uma inicialização da nossa API, onde iremos definir a porta em que a API vai rodar, iniciar o express, que é a biblioteca que fará a API funcionar. e também vai usar/definir as nossas rotas.

import express, { NextFunction, Request, Response } from "express";
import "express-async-errors"

import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";
import { createConnection } from "./database/data-source";
import { AppError } from "./helpers/AppError";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.use(
  (error: any, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response
        .status(error.statusCode)
        .json({ errorMessage: error.message });
    }

    return response
      .status(500)
      .json({ error: `Internal server error : ${error.message}` });
  }
);

createConnection();

app.listen(3333);
