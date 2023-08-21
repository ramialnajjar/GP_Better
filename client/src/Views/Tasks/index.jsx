// Project Imports
import AdminTasksPage from "./Views/AdminTasksPage";
import WorkerTasksPage from "./Views/WorkerTasksPage";
import { IdentityHelper } from "../../Common/Utils/IdentityHelper";
import NotFoundPage from "../NotFound";

function Home() {
  const userType = IdentityHelper.UserData.userType;
  switch (userType) {
    case "admin":
      return <AdminTasksPage />;
    case "worker":
      return <WorkerTasksPage />;
    default:
      return <NotFoundPage />;
  }
}

export default Home;
