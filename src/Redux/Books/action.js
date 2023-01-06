import axios from "axios";
import {
  EDIT_BOOK_SUCCESS,
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
} from "./actionTypes";

const getBookRequestAction = () => {
  return {
    type: GET_BOOKS_REQUEST,
  };
};
const getBookSuccessAction = (payload) => {
  return {
    type: GET_BOOKS_SUCCESS,
    payload,
  };
};
const getBookFailureAction = () => {
  return {
    type: GET_BOOKS_FAILURE,
  };
};

// const editBookRequest = () => {
//   return { type: EDIT_BOOK_REQUEST };
// };
const editBookSuccess = () => {
  return { type: EDIT_BOOK_SUCCESS };
};
// const editBookFailure = () => {
//   return { type: EDIT_BOOK_FAILURE };
// };

export const getBooks =
  (param = {}) =>
  (dispatch) => {
    dispatch(getBookRequestAction());
    axios
      .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`, param)
      .then((r) => {
        dispatch(getBookSuccessAction(r.data));
      })
      .catch((e) => {
        dispatch(getBookFailureAction());
      });
  };

// function getBooks(params) {
//   return function (dispatch) {
//     dispatch(getBookRequestAction());
//     return axios
//       .get("http://localhost:8080/books", params)
//       .then((r) => {
//         dispatch(getBookSuccessAction(r.data));
//       })
//       .catch((e) => {
//         dispatch(getBookFailureAction());
//       });
//   };
// }

// let obj = {
//   params: {
//     category: ["Novel", "Motivational"],
//     _sort: "release_year",
//     _order:"asc"
//   }
// }

export const editBook = (id, bookData) => (dispatch) => {
  return axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${id}`, bookData).then(() => {
      dispatch(editBookSuccess());
    });
};

// export { getBooks };
