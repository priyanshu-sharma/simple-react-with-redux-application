export const selectUser = (user) => {
  console.log("You have select the following user : ", user.first);

  return {
    type: "USER_SELECTED",
    payload: user
  }
};
