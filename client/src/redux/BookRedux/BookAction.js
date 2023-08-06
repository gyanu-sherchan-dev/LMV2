import { addBook, getAllBooks } from "../../helpers/axiosHelper";
import { addBookSuccess, requestPending } from "./BookSlice";
import { toast } from "react-toastify";

export const addBookAction = (data) => async (dispatch) => {
  dispatch(requestPending());
  const { status, message } = await addBook(data);

  status === "success" && toast[status](message) && dispatch(getBookAction());
};
export const getBookAction = () => async (dispatch) => {
  const { status, result } = await getAllBooks();

  status === "success" && dispatch(addBookSuccess(result));
};
