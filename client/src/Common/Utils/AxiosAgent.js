// Third party
import axios from "axios";

// Project Imports
import { IdentityHelper } from "./IdentityHelper";
import { CultureHelper } from "./CultureHelper";

axios.defaults.baseURL = process.env.REACT_APP_SERVICE_BASE_URL;

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${IdentityHelper.token}`;

axios.defaults.headers.common["Accept-Language"] =
  CultureHelper.language || process.env.REACT_APP_DEFAULT_LANGIAGE;

axios.interceptors.response.use(
  (response) => {
    if (
      IdentityHelper.TokenReminingMinutes &&
      IdentityHelper.TokenReminingMinutes <=
        process.env.REACT_APP_TOKEN_EXPIRATION_THRESHOLD
    ) {
      axios.post("api/account/refresh").then((response) => {
        IdentityHelper.token = response.data;
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data}`;
      });
    }

    return response;
  }

  // NOT IMPLEMENTED YET
  // (error) => {
  //   if (error?.response?.status === 401) {
  //     IdentityHelper.removeToken();

  //     window.location.reload();

  //     return Promise.reject(error);
  //   }

  //   console.error(error);

  //   return Promise.resolve({ code: 0, strMessage: "" });
  // }
);

export default axios;
