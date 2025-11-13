
"use client";

interface TripProps {
  trip: any;
}

export default function TripOverview({ trip }: TripProps) {
  return (
    <div className="border rounded-lg p-6 bg-white">
      <h2 className="text-lg font-semibold mb-2">{trip.title}</h2>
      <p className="text-sm text-gray-600 mb-6">{trip.description}</p>

      <div className="grid grid-cols-4 gap-4 mb-6 text-sm">
        <div className="bg-gray-100 p-3 rounded-md">
          <p className="text-gray-500">📍 From</p>
          <p className="font-medium">{trip.from}</p>
        </div>
        <div className="bg-gray-100 p-3 rounded-md">
          <p className="text-gray-500">📅 Date</p>
          <p className="font-medium">
            {trip.startDate} - {trip.endDate}
          </p>
        </div>
        <div className="bg-gray-100 p-3 rounded-md">
          <p className="text-gray-500">💰 Budget</p>
          <p className="font-medium">₹{trip.budget} / person</p>
        </div>
        <div className="bg-gray-100 p-3 rounded-md">
          <p className="text-gray-500">👥 Travelers</p>
          <p className="font-medium">
            {trip.joinedTravelers} / {trip.maxTravelers} joined
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <p className="text-gray-500">Group Size</p>
          <p className="font-medium">{trip.groupSize}</p>
        </div>
        <div>
          <p className="text-gray-500">Trip Style</p>
          <p className="font-medium">{trip.tripStyle}</p>
        </div>
        <div>
          <p className="text-gray-500">Travel Style</p>
          <p className="font-medium">{trip.travelStyle}</p>
        </div>
        <div>
          <p className="text-gray-500">Duration</p>
          <p className="font-medium">{trip.duration}</p>
        </div>
        <div>
          <p className="text-gray-500">Language</p>
          <p className="font-medium">{trip.languages.join(", ")}</p>
        </div>
        <div>
          <p className="text-gray-500">Split Cost</p>
          <p className="font-medium">{trip.splitCost ? "Yes" : "No"}</p>
        </div>
        <div>
          <p className="text-gray-500">Looking For</p>
          <p className="font-medium">{trip.lookingFor}</p>
        </div>
        <div>
          <p className="text-gray-500">Food Preference</p>
          <p className="font-medium">{trip.foodPreference}</p>
        </div>
      </div>
    </div>
  );
}



