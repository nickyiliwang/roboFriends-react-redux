import {
  CHANGE_SEARCH_FIELD,
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED
} from "./types";
import jsonApi from "../api/jsonPlaceholder";

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

// higher order function
// redux thunk is listening to actions, such as functions
// like a portal for filtering/ trigger
export const fetchRobots = () => dispatch => {
  dispatch({ type: FETCH_ROBOTS_PENDING });
  jsonApi
    .get("/users")
    .then(users =>
      dispatch({ type: FETCH_ROBOTS_SUCCESS, payload: users.data })
    )
    .catch(error => dispatch({ type: FETCH_ROBOTS_FAILED, payload: error }));
};
