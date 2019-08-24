import {
  CHANGE_SEARCH_FIELD,
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED
} from "../action/types";

import { combineReducers } from "redux";

const INITIAL_STATE_SEARCH = {
  searchField: ""
};

const searchRobots = (state = INITIAL_STATE_SEARCH, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const INITIAL_STATE_FETCH = {
  isPending: false,
  robots: [],
  error: ""
};

const fetchRobots = (state = INITIAL_STATE_FETCH, action = {}) => {
  switch (action.type) {
    case FETCH_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case FETCH_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case FETCH_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchRobots,
  fetchRobots
});

export default rootReducer;
