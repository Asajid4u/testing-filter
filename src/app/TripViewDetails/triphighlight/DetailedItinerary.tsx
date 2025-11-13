// const DetailedItinerary = () => {
//   const itinerary = [
//     "Arrival in Seminyak",
//     "Arrival in Seminyak",
//     "Arrival in Seminyak",
//   ];

//   const points = [
//     "Airport pickup",
//     "Beach sunset welcome dinner",
//     "Hotel check-in",
//   ];

//   return (
//     <div className="border rounded-xl p-5 bg-white shadow-sm">
//       <h2 className="text-lg font-semibold mb-3">Detailed Itinerary</h2>
//       <div className="space-y-4">
//         {itinerary.map((day, i) => (
//           <div key={i} className="flex items-start gap-4">
//             <div className="w-7 h-7 flex items-center justify-center bg-red-500 text-white rounded-full font-semibold">
//               {i + 1}
//             </div>
//             <div>
//               <h3 className="font-semibold text-gray-800">{day}</h3>
//               <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
//                 {points.map((p, j) => (
//                   <li key={j}>{p}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DetailedItinerary;


// "use client";
// import { useEffect, useState } from "react";
// import { fetchData } from "../lib/api";

// interface DayPlan {
//   title: string;
//   activities: string[];
// }

// const DetailedItinerary = () => {
//   const [itinerary, setItinerary] = useState<DayPlan[]>([]);

//   useEffect(() => {
//     const getItinerary = async () => {
//       const data = await fetchData("https://api.example.com/trip/itinerary");
//       if (data) {
//         setItinerary(data.itinerary);
//       } else {
//         // Dummy fallback
//         setItinerary([
//           {
//             title: "Arrival in Seminyak",
//             activities: [
//               "Airport pickup",
//               "Beach sunset welcome dinner",
//               "Hotel check-in",
//             ],
//           },
//           {
//             title: "Explore Ubud",
//             activities: [
//               "Visit Monkey Forest",
//               "Coffee plantation tour",
//               "Balinese dinner night",
//             ],
//           },
//         ]);
//       }
//     };
//     getItinerary();
//   }, []);

//   return (
//     <div className="border rounded-xl p-5 bg-white shadow-sm">
//       <h2 className="text-lg font-semibold mb-3">Detailed Itinerary</h2>
//       <div className="space-y-4">
//         {itinerary.map((day, i) => (
//           <div key={i} className="flex items-start gap-4">
//             <div className="w-7 h-7 flex items-center justify-center bg-red-500 text-white rounded-full font-semibold">
//               {i + 1}
//             </div>
//             <div>
//               <h3 className="font-semibold text-gray-800">{day.title}</h3>
//               <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
//                 {day.activities.map((p, j) => (
//                   <li key={j}>{p}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DetailedItinerary;



"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../lib/api";
import { dummyData } from "../lib/dummyData";

interface DayPlan {
  title: string;
  activities: string[];
}

const DetailedItinerary = () => {
  const [itinerary, setItinerary] = useState<DayPlan[]>([]);

  useEffect(() => {
    const getItinerary = async () => {
      const data = await fetchData("/api/trip/itinerary");
      setItinerary(data?.itinerary || dummyData.itinerary);
    };
    getItinerary();
  }, []);

  return (
    <div className="border rounded-xl p-5 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Detailed Itinerary</h2>
      <div className="space-y-4">
        {itinerary.map((day, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-7 h-7 flex items-center justify-center bg-red-500 text-white rounded-full font-semibold">
              {i + 1}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{day.title}</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                {day.activities.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedItinerary;
