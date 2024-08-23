import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import moment from "moment";
import clientRoutes from "./routes/client/index.route";
import adminRoutes from "./routes/admin/index.route";
import { systemConfig } from "./config/system";

dotenv.config();

const app: Express = express();
const port: (number | string) = `${process.env.PORT}` || 3000;

app.use(bodyParser.json());

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));

// App Local Variables
app.locals.moment = moment;

//Client Routes
clientRoutes(app);

app.locals.prefixAdmin = systemConfig.prefixAdmin;

// Admin
adminRoutes(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});