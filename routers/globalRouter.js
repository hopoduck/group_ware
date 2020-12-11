import express from "express";
import {
  getHome,
  getMessage,
  getEmail,
  getApproval,
  getBoard,
  getSignUp,
  getSignIn,
  postSignIn,
  postSignUp,
  getMessageReciveBox,
  getEmailReciveBox,
} from "../controllers/globalController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, getHome);
globalRouter.get(routes.signIn, getSignIn);
globalRouter.post(routes.signIn, postSignIn);
globalRouter.get(routes.signUp, getSignUp);
globalRouter.post(routes.signUp, postSignUp);
// globalRouter.get(routes.message, getMessage);
globalRouter.get(routes.messageReciveBox, getMessageReciveBox);
globalRouter.get(routes.emailReciveBox, getEmailReciveBox);
globalRouter.get(routes.approval, getApproval);
globalRouter.get(routes.board, getBoard);

export default globalRouter;
