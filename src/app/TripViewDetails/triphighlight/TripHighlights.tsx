// const TripHighlights = () => {
//   const highlights = [
//     "Beach activities",
//     "Local cuisine",
//     "Temple visits",
//     "Yoga sessions",
//   ];

//   return (
//     <div className="border rounded-xl p-5 bg-white shadow-sm">
//       <h2 className="text-lg font-semibold mb-3">Trip Highlights</h2>
//       <div className="flex flex-wrap gap-4">
//         {highlights.map((item, i) => (
//           <div
//             key={i}
//             className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg text-sm"
//           >
//             <span className="text-green-600">✔</span>
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// export default TripHighlights;



// "use client";
// import { useEffect, useState } from "react";
// import { fetchData } from "../lib/api";

// const TripHighlights = () => {
//   const [highlights, setHighlights] = useState<string[]>([]);

//   useEffect(() => {
//     const getHighlights = async () => {
//       const data = await fetchData("https://api.example.com/trip/highlights");
//       if (data) {
//         setHighlights(data.highlights);
//       } else {
//         // Dummy fallback
//         setHighlights([
//           "Beach activities",
//           "Local cuisine",
//           "Temple visits",
//           "Yoga sessions",
//         ]);
//       }
//     };
//     getHighlights();
//   }, []);

//   return (
//     <div className="border rounded-xl p-5 bg-white shadow-sm">
//       <h2 className="text-lg font-semibold mb-3">Trip Highlights</h2>
//       <div className="flex flex-wrap gap-4">
//         {highlights.map((item, i) => (
//           <div
//             key={i}
//             className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg text-sm"
//           >
//             <span className="text-green-600">✔</span>
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TripHighlights;



"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../lib/api";
import { dummyData } from "../lib/dummyData";

const TripHighlights = () => {
  const [highlights, setHighlights] = useState<string[]>([]);

  useEffect(() => {
    const getHighlights = async () => {
      const data = await fetchData("/api/trip/highlights"); // 🔁 Replace with real API when ready
      setHighlights(data?.highlights || dummyData.tripHighlights);
    };
    getHighlights();
  }, []);

  return (
    <div className="border rounded-xl p-5 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Trip Highlights</h2>
      <div className="flex flex-wrap gap-4">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg text-sm"
          >
            <span className="text-green-600">✔</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripHighlights;
