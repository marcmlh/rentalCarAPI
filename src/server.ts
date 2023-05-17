//serve como uma inicialização da nossa API, onde iremos definir a porta em que a API vai rodar, iniciar o express, que é a biblioteca que fará a API funcionar. e também vai usar/definir as nossas rotas. 

import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3333);