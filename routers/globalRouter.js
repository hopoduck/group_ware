import express from "express";
import { getHome, getMessage, getEmail, getApproval, getBoard, getSignUp, getSignIn } from "../controllers/globalController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, getHome);
globalRouter.get(routes.signIn, getSignIn);
globalRouter.get(routes.signUp, getSignUp);
globalRouter.get(routes.message, getMessage);
globalRouter.get(routes.email, getEmail);
globalRouter.get(routes.approval, getApproval);
globalRouter.get(routes.board, getBoard);

export default globalRouter;
