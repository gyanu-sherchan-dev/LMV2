import UserSchema from "./UserSchema.js";

//create user
export const createUser = (obj) => {
  return UserSchema(obj).save();
};

//get user
export const getUser = (filter) => {
  return UserSchema.findOne(filter);
};
