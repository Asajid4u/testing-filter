// import TripHighlights from "./TripHighlights";
// import JoinedTravelers from "./JoinedTravelers";
// import DetailedItinerary from "./DetailedItinerary";
// import TripRoadmap from "./TripRoadmap";
// import SafetyInformation from "./SafetyInformation";
// import ShareThisTrip from "./ShareThisTrip";
// import CancellationPolicy from "./CancellationPolicy";

// const TripDetails = () => {
//   return (
//     <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6 p-6">
//       {/* Left Section */}
//       <div className="col-span-2 space-y-6">
//         <TripHighlights />
//         <DetailedItinerary />
//         <SafetyInformation />
//         <CancellationPolicy />
//       </div>

//       {/* Right Section */}
//       <div className="col-span-1 space-y-6">
//         <JoinedTravelers />
//         <TripRoadmap />
//         <ShareThisTrip />
//       </div>
//     </div>
//   );
// };

// export default TripDetails;




"use client";

import TripHighlights from "./TripHighlights";
import JoinedTravelers from "./JoinedTravelers";
import DetailedItinerary from "./DetailedItinerary";
import TripRoadmap from "./TripRoadmap";
import SafetyInformation from "./SafetyInformation";
import ShareThisTrip from "./ShareThisTrip";
import CancellationPolicy from "./CancellationPolicy";

const TripDetails = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-5 sm:px-10 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 flex flex-col gap-6 -mt-40">
          <TripHighlights />
          <DetailedItinerary />
          <SafetyInformation />
          <CancellationPolicy />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          <JoinedTravelers />
          <TripRoadmap />
          <ShareThisTrip />
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
