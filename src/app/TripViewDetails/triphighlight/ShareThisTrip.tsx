import { FaFacebookF, FaTwitter, FaLink } from "react-icons/fa";

const ShareThisTrip = () => {
  return (
    <div className="border rounded-xl p-5 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Share this trip</h2>
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <FaFacebookF />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <FaTwitter />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <FaLink />
          </button>
        </div>
        <button className="px-4 py-1 border rounded-lg text-sm font-medium hover:bg-gray-100">
          Copy
        </button>
      </div>
    </div>
  );
};

export default ShareThisTrip;
