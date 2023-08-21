import { useRoutes } from "react-router-dom";

// Routes
import MainRoutes, { AuthRoutes } from "./MainRoutes";

const Routes = () => {
  return useRoutes([MainRoutes, AuthRoutes]);
};

export default Routes;
