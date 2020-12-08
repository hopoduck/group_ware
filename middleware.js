import routes from "./routes";

export const middleware = (req, res, next) => {
  res.locals.COMPANY_NAME = process.env.COMPANY_NAME;
  res.locals.PROGRAM_NAME = process.env.PROGRAM_NAME;
  res.locals.loggedUser = undefined;
  res.locals.routes = routes;
  next();
};
