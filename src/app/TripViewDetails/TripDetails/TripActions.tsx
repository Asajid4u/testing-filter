// "use client";

// export default function TripActions() {
//   return (
//     <div className="border rounded-lg p-6 bg-white w-full">
//       <h3 className="text-xl font-bold mb-2">₹1500</h3>
//       <p className="text-sm text-gray-500 mb-4">per person</p>

//       <div className="text-sm space-y-2 mb-4">
//         <p>
//           <span className="text-gray-500">Start Date:</span> <span>Nov 15, 2025</span>
//         </p>
//         <p>
//           <span className="text-gray-500">End Date:</span> <span>Nov 25, 2025</span>
//         </p>
//         <p>
//           <span className="text-gray-500">Duration:</span> <span>10 days</span>
//         </p>
//         <p className="text-green-600 font-medium">3 remaining spots</p>
//       </div>

//       <button className="w-full bg-[#FF6B6B] hover:bg-[#ff4a4a] text-white font-medium py-2 rounded-md mb-4">
//         Join this trip
//       </button>

//       <button className="w-full border border-gray-300 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-100">
//         Chat with Organizer
//       </button>
//     </div>
//   );
// }

"use client";

interface TripActionsProps {
  trip: any;
}

export default function TripActions({ trip }: TripActionsProps) {
  const handleJoinTrip = async () => {
    try {
      // ✅ Replace with real API call later
      /*
      const res = await fetch(`/api/trips/${trip.tripId}/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: 2003 }),
      });
      const data = await res.json();
      alert(data.message);
      */
      alert("Joined trip successfully! (dummy response)");
    } catch {
      alert("Error joining trip.");
    }
  };

  const handleChat = async () => {
    try {
      // ✅ Replace with real API later
      /*
      const res = await fetch(`/api/chat/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: 2003, tripId: trip.tripId }),
      });
      const data = await res.json();
      */
      alert("Chat started with organizer! (dummy response)");
    } catch {
      alert("Failed to start chat.");
    }
  };

  return (
    <div className="border rounded-lg p-6 bg-white w-full">
      <h3 className="text-xl font-bold mb-2">₹{trip.budget}</h3>
      <p className="text-sm text-gray-500 mb-4">per person</p>

      <div className="text-sm space-y-2 mb-4">
        <p>
          <span className="text-gray-500">Start Date:</span>{" "}
          <span>{trip.startDate}</span>
        </p>
        <p>
          <span className="text-gray-500">End Date:</span>{" "}
          <span>{trip.endDate}</span>
        </p>
        <p>
          <span className="text-gray-500">Duration:</span>{" "}
          <span>{trip.duration}</span>
        </p>
        <p className="text-green-600 font-medium">
          {trip.maxTravelers - trip.joinedTravelers} remaining spots
        </p>
      </div>

      <button
        onClick={handleJoinTrip}
        className="w-full bg-[#FF6B6B] hover:bg-[#ff4a4a] text-white font-medium py-2 rounded-md mb-4"
      >
        Join this trip
      </button>

      <button
        onClick={handleChat}
        className="w-full border border-gray-300 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-100"
      >
        Chat with Organizer
      </button>
    </div>
  );
}

