import jwtDecode from "jwt-decode";

function isTokenStillValid(token) {
  const { exp } = jwtDecode(token);
  return Date.now() < exp * 1000;
}

function getUserIdFromIdToken(token) {
  const { id } = jwtDecode(token);
  return id;
}

export default {
  isTokenStillValid,
  getUserIdFromIdToken,
};
