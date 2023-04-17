const endpoints = {
  createUser: "user/create/mobile",
  verifyUser: "user/verify/mobile",
  loginUser: "user/login/mobile",
  socialAuth: "user/social",
  requestPasswordReset: "user/passwordResetEmail",
  passwordReset: "user/passwordReset",
  reportProject: "project/report",
  myReportProject: "project/my-report",
  projects: "project",
  newProjects: "/projects",
  projectNotification: "project/notification",
  projectInterest: "project/subscribe",
  fetchProjectSubscribe: "project/subscribe/fetch",
  needs: "community/need",
  votedNeeds: "community/my-votes",
  submittedNeeds: "/community/need/my-needs",
  needCategory: "community/category",
  createNeed: "community/need",
  allocation: "allocation",
  voteNeed: "community/vote",
  createFeedBack: "/contact/feedback",
  createSupport: "/contact/support",
  deleteAccount: "user/delete"
};


export default endpoints;
