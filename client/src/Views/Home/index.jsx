// Project Imports
import AdminDashboard from "./Views/AdminDashboard";
import WorkerDashboard from "./Views/WorkerDashboard";
import CitizenForum from "./Views/CitizenForum";
import { IdentityHelper } from "../../Common/Utils/IdentityHelper";
import NotFoundPage from "../NotFound";

function Home() {
  const userType = IdentityHelper.UserData.userType;
  switch (userType) {
    case "admin":
      return <AdminDashboard />;
    case "worker":
      return <WorkerDashboard />;
    case "user":
      return <CitizenForum />;
    default:
      return <NotFoundPage />;
  }
}

export default Home;
