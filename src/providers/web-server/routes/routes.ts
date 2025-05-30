import express from "express";
import { UserRouter } from "./routes-http/user.routes";

export interface IRouterHttp {
  handle(router: express.Router): void;
}

const router = express.Router();

const listRoutes: Array<IRouterHttp> = [new UserRouter()];

// SonarQube
listRoutes.forEach((routerCustom) => {
  routerCustom.handle(router);
});

export { router };
