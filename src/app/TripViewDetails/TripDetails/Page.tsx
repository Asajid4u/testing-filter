import TripDetailsPage from "./TripDetailsPage";
import TripDetails from "../triphighlight/TripDetails";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-visible">
      <TripDetailsPage />
      <TripDetails />
    </div>
  );
}
