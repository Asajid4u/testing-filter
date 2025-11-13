const SafetyInformation = () => {
  return (
    <div className="border rounded-xl p-5 bg-green-50 border-green-200">
      <div className="flex items-center gap-2">
        <span className="text-green-600 text-xl">🛡️</span>
        <h2 className="font-semibold text-green-800">Safety Information</h2>
      </div>
      <p className="text-sm text-gray-700 mt-2">
        All travelers are verified and rated by the community. The trip leader
        has a 96% safety rating.
      </p>
    </div>
  );
};

export default SafetyInformation;
