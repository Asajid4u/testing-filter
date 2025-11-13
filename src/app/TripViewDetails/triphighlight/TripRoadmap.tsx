// const TripRoadmap = () => {
//   return (
//     <div className="border rounded-xl p-5 bg-white shadow-sm">
//       <h2 className="text-lg font-semibold mb-3">Trip Roadmap</h2>
//       <img
//         src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Map_of_Greece.svg/800px-Map_of_Greece.svg.png"
//         alt="Trip Map"
//         className="rounded-lg border"
//       />
//     </div>
//   );
// };

// export default TripRoadmap;



"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

// Dynamically import MapContainer to avoid SSR issues in Next.js
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

const TripRoadmap = () => {
  // Fix leaflet icon path issue
  useEffect(() => {
    const L = require("leaflet");
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });
  }, []);

  return (
    <div className="border rounded-xl p-5 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Trip Roadmap</h2>

      <div className="h-64 w-full rounded-lg overflow-hidden border">
        <MapContainer
          center={[28.6139, 77.209]} // New Delhi
          zoom={5}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[28.6139, 77.209]}>
            <Popup>Starting Point — New Delhi</Popup>
          </Marker>
          <Marker position={[-8.409518, 115.188919]}>
            <Popup>Destination — Bali</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default TripRoadmap;
