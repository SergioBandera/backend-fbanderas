import express from "express";
import helmet from "helmet";
import cors from "cors";
import ctrlClients from "./routes/clientes/controllers/index";
import mongo from './core/mongo/MongoManager'
import errorHandler from "./core/middleware/error-handler";

const app = express();
mongo.connect()
app.use(helmet());
app.use(cors());


app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));
 
app.get("/", (q, r) =>
  r.send(`${process.env.NAME} API is connected and ready!!! 🚀`)
);

app.use("/client" , ctrlClients);

app.use(errorHandler.logError);
app.use(errorHandler.clientErrorHandler);
app.use(errorHandler.errorHandler); 

export default app;