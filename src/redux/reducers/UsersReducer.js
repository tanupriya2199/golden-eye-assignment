import * as type from "../types";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export default function users(state = initialState, action) {
  console.log("action===", action, "ini", state);
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case type.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.DELETE_USER: {
      return {
        ...state,
        users: state.users.filter((todo) => todo.id !== action.payload),
      };
    }

    default:
      return state;
  }
}
