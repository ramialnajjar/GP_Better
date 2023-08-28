import React, { useRef, useEffect, useState } from "react";
import mapboxgl, { Marker, Popup } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Box } from "@mui/material";
import "./Map_Tasks.css";
import { GetTasksApi } from "../../Tasks/Service/GetTasksApi";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWdyaWRiIiwiYSI6ImNsbDN5dXgxNTAxOTAza2xhdnVmcnRzbGEifQ.3cM2WO5ubiAjuWbpXi9woQ";

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(31.952912);
  const [lng, setLng] = useState(35.910861);
  const [zoom, setZoom] = useState(11);
  const [tasks, setTasks] = useState([]);
  const [pageSize, setPageSize] = useState([15]);
  const [pagenumber, setPageNumber] = useState([1]);

  useEffect(() => {
    const setTasksView = async () => {
      const response = await GetTasksApi(pageSize, pagenumber, [], []);
      console.log(response);
      setTasks(response);
    };
    setTasksView();
    // fetchData();
  }, [pageSize, pagenumber]);
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          message: "Foo",
          iconSize: [60, 60],
        },
        geometry: {
          type: "Point",
          coordinates: [lng, lat],
        },
      },
      {
        type: "Feature",
        properties: {
          message: "Bar",
          iconSize: [50, 50],
        },
        geometry: {
          type: "Point",
          coordinates: [35.875612, 31.957211],
        },
      },
    ],
  };
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
    if (!map.current || !tasks) return;

    // Dynamically create markers based on comDet

    tasks.map((complaint) => {
      const el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundImage = `url('YOUR_IMAGE_URL')`; // Replace with a valid URL or logic
      el.style.width = "50px";
      el.style.height = "50px";

      const popupContent = document.createElement("div");
      popupContent.className = "popup-container";
      popupContent.innerHTML = `
          <div class="popup-content">
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
  }, [tasks]);
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
