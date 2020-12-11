const routes = {
  home: "/",
  signIn: "/sign-in",
  signUp: "/sign-up",

  // message: 업무연락
  message: "/message",
  messageDetail: "/message/:id",
  messageReciveBox: "/message/recive-box",
  messageOutgoingBox: "/message/outgoing-box",
  messageFullbox: "/message/full-box",
  messageWrite: "/message/write",
  messageDelete: "/message/delete",

  // email: 이메일
  email: "/email",
  emailDetail: "/email/:id",
  emailReciveBox: "/email/recive-box",
  emailOutgoingBox: "/email/outgoing-box",
  emailFullbox: "/email/full-box",
  emailWrite: "/email/write",
  emailDelete: "/email/delete",

  // board: 게시판
  board: "/board",
  boardDetail: "/board/:id",
  boardWrite: "/board/write",
  boardDelete: "/board/delete",

  approval: "/approval",
  approvalDetail: "/approval/:id",
  approvalReciveBox: "/approval/recive-box",
  approvalOutgoingBox: "/approval/outgoing-box",
  approvalFullbox: "/approval/full-box",
  approvalWrite: "/approval/write",
  approvalDelete: "/approval/delete",
};

export default routes;
