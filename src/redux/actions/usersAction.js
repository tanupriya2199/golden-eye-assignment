import * as type from "../types";

export function getUsers(users) {
  return {
    type: type.GET_USERS_REQUESTED,
    payload: users,
  };
}

export const deleteUser = (id) => {
  return {
    type: type.DELETE_USER,
    payload: id,
  };
};

export function updateUser(user) {
  return {
    type: type.UPDATE_USER,
    payload: user,
  };
}
