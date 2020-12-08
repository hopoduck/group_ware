import express from "express";
import routes from "../routes";

export const getHome = (req, res) => {
  res.render("home", { pageTitle: "홈" });
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
