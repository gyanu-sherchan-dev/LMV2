import axios from "axios";

const Root_URL = "http://localhost:5000/api/v1";
const userURL = Root_URL + "/user";

//register user
export const registerUser = async (userObj) => {
  try {
    const { data } = await axios.post(userURL, userObj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//login user
export const loginUser = async (userObj) => {
  try {
    const { data } = await axios.post(userURL + "/login", userObj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
