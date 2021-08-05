import axios from "axios";
import querystring from "querystring";

const instance = axios.create({
  baseURL: process.env.VUE_APP_KEYCLOAK_TOKEN_URL,
});

async function connectUser(user) {
  const body = querystring.stringify({
    username: user.email,
    password: user.password,
    client_id: process.env.VUE_APP_CLIENT_ID,
    grant_type: process.env.VUE_APP_GRANT_TYPE,
    scope: "openid",
  });

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  return instance.post("", body, { headers });
}

export default {
  connectUser,
};
