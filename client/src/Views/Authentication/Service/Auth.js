import axios from "../../../Common/Utils/AxiosAgent";
import { IdentityHelper } from "../../../Common/Utils/IdentityHelper";

export const Authorize = {
  Login: async (LoginRequest) => {
    try {
      const response = await axios.post("/api/account/login", LoginRequest);

      IdentityHelper.token = response.data;
      return { status: IdentityHelper.isTokenValid(), message: "Success" };
    } catch (error) {
      IdentityHelper.removeToken();
      return error.code === "ERR_NETWORK"
        ? {
            status: IdentityHelper.isTokenValid(),
            message: "No connection, server is down.",
          }
        : {
            status: IdentityHelper.isTokenValid(),
            message: error.response.data,
          };
    }
  },

  Register: async (registrationRequest) => {
    try {
      const response = await axios.post(
        "/api/account/register",
        registrationRequest
      );

      IdentityHelper.token = response.data;
      return IdentityHelper.isTokenValid();
    } catch (error) {
      return false;
    }
  },
};
