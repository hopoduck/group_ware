import express from "express";
import { middleware } from "./middleware";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.set("view engine", "pug");
app.use("/static", express.static("static"));
app.use(middleware);

app.use(routes.home, globalRouter);

export default app;
