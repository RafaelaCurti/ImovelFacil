import express from "express";
import { router } from "./Rotas.js";

const app = express();

app.use(express.json());

app.use(router);

app.listen(8000, () => {

    console.log("Serviço online")
})