import axios from "axios";

const Root_URL = "http://localhost:5000/api/v1";
const userURL = Root_URL + "/user";

const bookURL = Root_URL + "/book";

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

//Books

// addBooks
export const addBook = async (bookObj) => {
  try {
    const { data } = await axios.post(bookURL, bookObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// getBooks
export const getAllBooks = async () => {
  try {
    const { data } = await axios.get(bookURL);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
