import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from './swagger.json';


const app = express();
createConnection();

app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve,swaggerUi.setup(swaggerDocs))
app.use(routes);
app.listen(3000);









