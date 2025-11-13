// interface Traveler {
//   name: string;
//   rating: number;
//   safety: number;
//   image: string;
// }

// const travelers: Traveler[] = [
//   {
//     name: "Annette Black",
//     rating: 4.1,
//     safety: 88,
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//   },
//   {
//     name: "Kathryn Murphy",
//     rating: 4.1,
//     safety: 88,
//     image: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     name: "Devon Lane",
//     rating: 4.1,
//     safety: 88,
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
// ];

// const JoinedTravelers = () => {
//   return (
//     <div className="border rounded-xl p-5 bg-white shadow-sm">
//       <h2 className="text-lg font-semibold mb-3">
//         Joined Travelers ({travelers.length})
//       </h2>
//       <div className="space-y-3">
//         {travelers.map((traveler, i) => (
//           <div key={i} className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <img
//                 src={traveler.image}
//                 alt={traveler.name}
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <p className="font-medium text-gray-800">{traveler.name}</p>
//                 <p className="text-xs text-gray-500">
//                   ⭐ {traveler.rating} · {traveler.safety}%
//                 </p>
//               </div>
//             </div>
//             <button className="px-3 py-1 border rounded-lg text-sm font-medium hover:bg-gray-100">
//               View
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JoinedTravelers;



// "use client";
// import { useEffect, useState } from "react";
// import { fetchData } from "../lib/api";

// interface Traveler {
//   name: string;
//   rating: number;
//   safety: number;
//   image: string;
// }

// const JoinedTravelers = () => {
//   const [travelers, setTravelers] = useState<Traveler[]>([]);

//   useEffect(() => {
//     const getTravelers = async () => {
//       const data = await fetchData("https://api.example.com/trip/travelers");
//       if (data) {
//         setTravelers(data.travelers);
//       } else {
//         // Dummy fallback
//         setTravelers([
//           {
//             name: "Annette Black",
//             rating: 4.1,
//             safety: 88,
//             image: "https://randomuser.me/api/portraits/women/1.jpg",
//           },
//           {
//             name: "Kathryn Murphy",
//             rating: 4.3,
//             safety: 91,
//             image: "https://randomuser.me/api/portraits/women/2.jpg",
//           },
//           {
//             name: "Devon Lane",
//             rating: 4.5,
//             safety: 94,
//             image: "https://randomuser.me/api/portraits/men/3.jpg",
//           },
//         ]);
//       }
//     };
//     getTravelers();
//   }, []);

//   return (
//     <div className="border rounded-xl p-5 bg-white shadow-sm">
//       <h2 className="text-lg font-semibold mb-3">
//         Joined Travelers ({travelers.length})
//       </h2>
//       <div className="space-y-3">
//         {travelers.map((traveler, i) => (
//           <div key={i} className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <img
//                 src={traveler.image}
//                 alt={traveler.name}
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <p className="font-medium text-gray-800">{traveler.name}</p>
//                 <p className="text-xs text-gray-500">
//                   ⭐ {traveler.rating} · {traveler.safety}%
//                 </p>
//               </div>
//             </div>
//             <button className="px-3 py-1 border rounded-lg text-sm font-medium hover:bg-gray-100">
//               View
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JoinedTravelers;



"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../lib/api";
import { dummyData } from "../lib/dummyData";

interface Traveler {
  name: string;
  rating: number;
  safety: number;
  image: string;
}

const JoinedTravelers = () => {
  const [travelers, setTravelers] = useState<Traveler[]>([]);

  useEffect(() => {
    const getTravelers = async () => {
      const data = await fetchData("/api/trip/travelers");
      setTravelers(data?.travelers || dummyData.travelers);
    };
    getTravelers();
  }, []);

  return (
    <div className="border rounded-xl p-5 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-3">
        Joined Travelers ({travelers.length})
      </h2>
      <div className="space-y-3">
        {travelers.map((t, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={t.image}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-800">{t.name}</p>
                <p className="text-xs text-gray-500">
                  ⭐ {t.rating} · {t.safety}%
                </p>
              </div>
            </div>
            <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinedTravelers;
