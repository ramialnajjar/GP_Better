import axios from "../../../Common/Utils/AxiosAgent";

export default async function GetPublicComplaintMarker() {
  try {
    console.log("function is working...")
    return await axios.get("/api/complaints/general/mapView");
  } catch (error) {
    console.error(error);
  }
}
