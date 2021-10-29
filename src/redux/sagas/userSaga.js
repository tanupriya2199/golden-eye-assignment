import { call, put, takeEvery } from "redux-saga/effects";

const apiUrl = "https://getautonami.com/users/index.json";

async function getApi() {
  return await fetch(apiUrl)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchUsers(action) {
  try {
    const users = yield call(getApi);
    yield put({ type: "GET_USERS_SUCCESS", users: users });
  } catch (e) {
    yield put({
      type: "GET_USERS_FAILED",
      message: e.message,
    });
  }
}

export function* userSaga() {
  yield takeEvery("GET_USERS_REQUESTED", fetchUsers);
}
