// // src/components/TypeChips.tsx
// "use client";
// import React from "react";

// type TypeKey = "All" | "Travel Enthusiast" | "Featured Trip Leader" | "Featured Trip Agency";

// type Props = {
//   selected: TypeKey;
//   setSelected: (k: TypeKey) => void;
// };

// export default function TypeChips({ selected, setSelected }: Props) {
//   const options: TypeKey[] = ["All", "Travel Enthusiast", "Featured Trip Leader", "Featured Trip Agency"];

//   return (
//     <div className="flex flex-wrap gap-3 mb-4">
//       {options.map((cat) => (
//         <button
//           key={cat}
//           onClick={() => setSelected(cat)}
//           className={`px-5 py-2 text-sm font-medium rounded-full border transition ${
//             selected === cat ? "bg-black text-white border-black" : "bg-white text-black border-gray-300 hover:bg-gray-100"
//           }`}
//         >
//           {cat}
//         </button>
//       ))}
//     </div>
//   );
// }
