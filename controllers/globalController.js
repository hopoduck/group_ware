import express from "express";
import routes from "../routes";
import User from "../models/User";

export const getHome = (req, res) => {
  if (req.loggedUser === undefined) {
    res.redirect(routes.signIn);
  } else {
    res.render("home", { pageTitle: "홈" });
  }
};

export const getSignIn = (req, res) => {
  res.render("signIn", { pageTitle: "로그인" });
};
export const postSignIn = (req, res) => {
  console.log(req.body);
};

export const getSignUp = async (req, res) => {
  console.log(await User.find({}));
  res.render("signUp", { pageTitle: "회원가입" });
};
export const postSignUp = async (req, res) => {
  const {
    body: { name, id, company },
  } = req;
  const newUser = await User.create({
    name,
    id,
    company,
  });
  console.log(await User.find({}));
  console.log(req.body);
};

export const getMessage = (req, res) => {
  res.render("message", { pageTitle: "업무연락" });
};

export const getEmail = (req, res) => {
  res.render("email", { pageTitle: "이메일" });
};

export const getApproval = (req, res) => {
  res.render("approval", { pageTitle: "전자결재" });
};

export const getBoard = (req, res) => {
  res.render("board", { pageTitle: "게시판" });
};
