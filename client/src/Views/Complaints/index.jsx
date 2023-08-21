// Project Imports
import AdminViewComplaints from "./Views/AdminViewComplaints";
import CitizenViewComplaints from "./Views/CitizenViewComplaints";
import { IdentityHelper } from "../../Common/Utils/IdentityHelper";
import NotFoundPage from "../NotFound";

function Home() {
  const userType = IdentityHelper.UserData.userType;
  switch (userType) {
    case "admin":
      return <AdminViewComplaints />;
    case "user":
      return <CitizenViewComplaints />;
    default:
      return <NotFoundPage />;
  }
}

export default Home;
