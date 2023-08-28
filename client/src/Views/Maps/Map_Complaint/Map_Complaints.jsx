import React, { useRef, useEffect, useState } from "react";
import mapboxgl, { Marker, Popup } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Box } from "@mui/material";
import "./Map_Complaints.css";
import { GetComplaintsApi } from "../../Complaints/Service/GetComplaintsApi";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWdyaWRiIiwiYSI6ImNsbDN5dXgxNTAxOTAza2xhdnVmcnRzbGEifQ.3cM2WO5ubiAjuWbpXi9woQ";

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(31.952912);
  const [lng, setLng] = useState(35.910861);
  const [zoom, setZoom] = useState(11);
  const [pageNumber, setPageNumber] = useState(0);
  const pageSize = 20;
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const setComplaintsView = async () => {
      const response = await GetComplaintsApi(pageSize, pageNumber);
      setComplaints(response.data);
    };
    setComplaintsView();
  }, [pageSize, pageNumber]);

  useEffect(() => {
    if (map.current) return; // Prevent map from being initialized multiple times

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  useEffect(() => {
    if (!map.current || !complaints) return;

    // Dynamically create markers based on comDet

    complaints.map((complaint) => {
      const el = document.createElement("div");
      el.className = "marker";
      const imageData = complaint.imageData;
      el.style.backgroundImage = `url(data:image/jpg;base64,${imageData})`;
      el.style.width = "50px";
      el.style.height = "50px";

      const popupContent = document.createElement("div");
      popupContent.className = "popup-container";
      popupContent.innerHTML = `
          <div class="popup-content">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZfr9h55Tt72GHmMpzNzMkARCArTXAjY2sbjoVcJoWA&s" 
          alt="Image Description" 
          style="width:100%; max-width:100px; margin:none;">
            <div class="popup-label">رقم البلاغ</div>
            <div class="popup-value">${complaint.intComplaintId}</div>
            <div class="popup-label">حالة البلاغ</div>
            <div class="popup-value">${complaint.strStatus}</div>
            <div class="popup-label">المستخدم</div>
            <div class="popup-value">${complaint.strUserName}</div>
            <div class="popup-label">تاريخ الأضافة</div>
            <div class="popup-value">${complaint.dtmDateCreated}</div>
          </div>
        `;

      const popup = new Popup({ offset: 25 }).setDOMContent(popupContent);

      new mapboxgl.Marker(el)
        .setLngLat([complaint.latLng.decLng, complaint.latLng.decLat])
        .setPopup(popup)
        .addTo(map.current);
    });
  }, [complaints]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="95%"
      width="100%"
    >
      <div
        ref={mapContainer}
        style={{ height: "100%", width: "100%", borderRadius: "5px" }}
      />
    </Box>
  );
}

export default App;
