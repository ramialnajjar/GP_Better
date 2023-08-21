import React /*,{ useEffect }*/ from "react";
// import { useNavigate } from "react-router";

// Project Imports
import NotFoundPage from "../../Views/NotFound";
import { IdentityHelper } from "./IdentityHelper";

const PermissionsHelper = ({ allowedRoles = [], element }) => {
  const user = IdentityHelper.UserData;
  if (user && allowedRoles.includes(user.userType)) {
    return element;
  } else {
    IdentityHelper.removeToken();
    return <NotFoundPage />;
  }
};

// const ResetApp = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // navigate("/");
//   }, []);

//   return <NotFoundPage />;
// };

export default PermissionsHelper;
