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
    case type.UPDATE_USER: {
      const updatedUsersArray = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            name: action.payload.name,
            email: action.payload.email,
            phone: action.payload.phone,
            website: action.payload.website,
          };
        } else {
          return user;
        }
      });
      return {
        ...state,
        users: updatedUsersArray,
      };
    }
    case type.DELETE_USER: {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    }

    default:
      return state;
  }
}
