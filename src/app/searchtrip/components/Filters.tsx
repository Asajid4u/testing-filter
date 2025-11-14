// Filters

"use client";

import { useEffect, useState } from "react";
import { Search, Mic, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

type Props = {
  // core filters (parent state / setters)
  query: string;
  setQuery: (v: string) => void;

  age: number;
  setAge: (n: number) => void;

  duration: number;
  setDuration: (n: number) => void;

  budget: number;
  setBudget: (n: number) => void;

  // ratings / scores (parent should use these in predicate)
  minRating: number;
  setMinRating: (n: number) => void;

  minSafeScore: number;
  setMinSafeScore: (n: number) => void;

  // optional match and score percent filters (parent may use or ignore)
  matchPercent?: number;
  setMatchPercent?: (n: number) => void;

  scorePercent?: number;
  setScorePercent?: (n: number) => void;

  // optional behaviour
  autoApply?: boolean; // when true, apply changes immediately instead of waiting for "Apply"

  // optional clear handler (parent can also derive clear by resetting setter props)
  onClear?: () => void;
};

export default function Filters({
  query,
  setQuery,
  age,
  setAge,
  duration,
  setDuration,
  budget,
  setBudget,
  minRating,
  setMinRating,
  minSafeScore,
  setMinSafeScore,
  matchPercent = 0,
  setMatchPercent,
  scorePercent = 0,
  setScorePercent,
  autoApply = false,
  onClear,
}: Props) {
  const Router = useRouter();

  // Local (staged) state — user manipulates these until they press Apply (unless autoApply=true)
  const [localQuery, setLocalQuery] = useState(query);
  const [localAge, setLocalAge] = useState(age);
  const [localDuration, setLocalDuration] = useState(duration);
  const [localBudget, setLocalBudget] = useState(budget);

  // Radios (local)
  const [localMinRating, setLocalMinRating] = useState<number>(minRating ?? 0);
  const [localMinSafeScore, setLocalMinSafeScore] = useState<number>(
    minSafeScore ?? 0
  );
  const [localMatchPercent, setLocalMatchPercent] = useState<number>(
    matchPercent ?? 0
  );
  const [localScorePercent, setLocalScorePercent] = useState<number>(
    scorePercent ?? 0
  );

  // Languages
  const [inputLang, setInputLang] = useState("");
  const [languages, setLanguages] = useState<string[]>(["English"]);

  // Interests
  const [inputInterest, setInputInterest] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [rating, setRating] = useState(true);
  const [campability, setCampability] = useState(true);
  const [safe, setSafe] = useState(true);

  // Sync local state when parent props change externally
  useEffect(() => setLocalQuery(query), [query]);
  useEffect(() => setLocalAge(age), [age]);
  useEffect(() => setLocalDuration(duration), [duration]);
  useEffect(() => setLocalBudget(budget), [budget]);

  useEffect(() => setLocalMinRating(minRating ?? 0), [minRating]);
  useEffect(() => setLocalMinSafeScore(minSafeScore ?? 0), [minSafeScore]);
  useEffect(() => setLocalMatchPercent(matchPercent ?? 0), [matchPercent]);
  useEffect(() => setLocalScorePercent(scorePercent ?? 0), [scorePercent]);

  // Helpers
  const addLang = () => {
    const v = inputLang.trim();
    if (!v) return;
    if (!languages.includes(v)) setLanguages((s) => [...s, v]);
    setInputLang("");
  };
  const removeLang = (l: string) =>
    setLanguages((s) => s.filter((x) => x !== l));

  const addInterest = () => {
    const v = inputInterest.trim();
    if (!v) return;
    if (!interests.includes(v)) setInterests((s) => [...s, v]);
    setInputInterest("");
  };
  const removeInterest = (i: string) =>
    setInterests((s) => s.filter((x) => x !== i));

  const startVoice = () => {
    // demo hook — populate localQuery as example
    // replace with Web Speech API if you want real voice input
    alert("Voice search demo — this will populate the destination field.");
  };

  // Apply local state to parent
  const handleApply = () => {
    setQuery(localQuery);
    setAge(localAge);
    setDuration(localDuration);
    setBudget(localBudget);

    setMinRating(localMinRating);
    setMinSafeScore(localMinSafeScore);

    if (setMatchPercent) setMatchPercent(localMatchPercent);
    if (setScorePercent) setScorePercent(localScorePercent);
  };

  // Clear all (local + optionally parent if autoApply)
  const handleClearAll = () => {
    // reset local
    setLocalQuery("");
    setLocalAge(18);
    setLocalDuration(7);
    setLocalBudget(0);
    setLanguages(["English"]);
    setInputLang("");
    setInterests([]); // Clear interests
    setInputInterest(""); // Clear interest input
    setLocalMinRating(0);
    setLocalMinSafeScore(0);
    setLocalMatchPercent(0);
    setLocalScorePercent(0);

    // optionally apply immediately
    if (autoApply) {
      setQuery("");
      setAge(18);
      setDuration(7);
      setBudget(0);
      setMinRating(0);
      setMinSafeScore(0);
      if (setMatchPercent) setMatchPercent(0);
      if (setScorePercent) setScorePercent(0);
    }

    // call parent clear handler if provided
    onClear?.();
  };

  // Optionally apply single controls immediately
  const maybeApplySingle = (
    field:
      | "query"
      | "age"
      | "duration"
      | "budget"
      | "minRating"
      | "minSafeScore"
      | "matchPercent"
      | "scorePercent"
  ) => {
    if (!autoApply) return;
    switch (field) {
      case "query":
        setQuery(localQuery);
        break;
      case "age":
        setAge(localAge);
        break;
      case "duration":
        setDuration(localDuration);
        break;
      case "budget":
        setBudget(localBudget);
        break;
      case "minRating":
        setMinRating(localMinRating);
        break;
      case "minSafeScore":
        setMinSafeScore(localMinSafeScore);
        break;
      case "matchPercent":
        setMatchPercent?.(localMatchPercent);
        break;
      case "scorePercent":
        setScorePercent?.(localScorePercent);
        break;
    }
  };

  // Radio group options
  const ratingOptions = [4, 3, 2, 0] as const; // 0 == Any
  const safeOptions = [75, 50, 0] as const; // 0 == Any
  const percentOptions = [90, 80, 70, 60, 50, 0] as const; // 0 == Any

  return (
    <div className="bg-white p-5 rounded-xl shadow w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          className="text-sm text-gray-600 hover:text-gray-800 transition"
          onClick={() => Router.push("/")}
        >
          ← Back
        </button>
        <button
          onClick={handleClearAll}
          className="ml-auto text-sm text-gray-600 hover:underline"
        >
          Clear all filters
        </button>
      </div>

      <div className="mt-4 space-y-4">
        {/* Destination input (local only) */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            value={localQuery}
            onChange={(e) => {
              setLocalQuery(e.target.value);
              maybeApplySingle("query");
            }}
            placeholder="Destination typing..."
            className="w-full pl-9 pr-10 py-2 rounded-md border text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB5757]"
          />
          <button
            type="button"
            onClick={() => startVoice()}
            aria-label="Voice Search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#EB5757] transition-colors"
          >
            <Mic className="w-4 h-4" />
          </button>
        </div>

        {/* Quick tags */}

        <div className="flex flex-wrap gap-2 mt-2">
          {["Locals", "Nearby", "Starting point"].map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setLocalQuery(tag);
                maybeApplySingle("query");
              }}
              className="px-3 py-1 bg-rose-50 text-sm text-gray-600 rounded-full  hover:bg-rose-100 transition"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Language input */}
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-2">
            Language
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              value={inputLang}
              onChange={(e) => setInputLang(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addLang()}
              placeholder="Language typing..."
              className="w-full pl-9 pr-20 py-2 rounded-md border text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB5757]"
            />
            <button
              onClick={addLang}
              className="absolute right-3 top-1/2 -translate-y-1/2  text-gray-600 text-sm font-medium hover:underline"
            >
              Add
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {languages.map((l) => (
              <div
                key={l}
                className="flex items-center gap-2 bg-white  text-gray-600 px-3 py-1 rounded-full text-sm font-medium"
              >
                <span>{l}</span>
                <button onClick={() => removeLang(l)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Interest input */}
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-2">
            Interests
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              value={inputInterest}
              onChange={(e) => setInputInterest(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addInterest()}
              placeholder="Interest typing..."
              className="w-full pl-9 pr-20 py-2 rounded-md border text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB5757]"
            />
            <button
              onClick={addInterest}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-sm font-medium hover:underline"
            >
              Add
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {interests.map((i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white text-gray-600 px-3 py-1 rounded-full text-sm font-medium"
              >
                <span>{i}</span>
                <button onClick={() => removeInterest(i)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          {/* Header with arrow */}
          <button
            onClick={() => setRating(!rating)}
            aria-expanded={rating}
            className="w-full flex items-center justify-between text-xs font-medium text-gray-700"
          >
            <span>Rating</span>
            <FaChevronDown
              className={`transition-transform duration-300 ${
                rating ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* Content */}
          {rating && (
            <div className="grid grid-cols-2 gap-2 mt-3">
              {ratingOptions.map((r: number) => {
                const isActive = localMinRating === r;

                return (
                  <button
                    key={r}
                    onClick={() => {
                      setLocalMinRating(r);
                      maybeApplySingle("minRating");
                    }}
                    className={`text-sm py-2 px-3 border rounded-md transition flex items-center justify-center ${
                      isActive
                        ? "bg-[#0A4D4A] text-white border-[#0A4D4A]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {r === 0 ? "Any" : `⭐ ${r}.0+`}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="mb-3">
          {/* Header with arrow */}
          <button
            onClick={() => setCampability(!campability)}
            aria-expanded={campability}
            className="w-full flex items-center justify-between text-xs font-medium text-gray-700"
          >
            <span>Campability</span>
            <FaChevronDown
              className={`transition-transform duration-300 ${
                campability ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* Content — collapsible */}
          {campability && (
            <div className="grid grid-cols-2 gap-2 mt-3">
              {percentOptions.map((p) => {
                const isActive = localMatchPercent === p;

                return (
                  <button
                    key={p}
                    onClick={() => {
                      setLocalMatchPercent(p);
                      maybeApplySingle("matchPercent");
                    }}
                    className={`text-sm py-2 px-3 border rounded-md transition ${
                      isActive
                        ? "bg-[#0A4D4A] text-white border-[#0A4D4A]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {p === 0 ? "All" : `${p}%+`}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="mb-3">
          {/* Header with arrow */}
          <button
            onClick={() => setSafe(!safe)}
            aria-expanded={safe}
            className="w-full flex items-center justify-between text-xs font-medium text-gray-700"
          >
            <span>Safe Percent</span>
            <FaChevronDown
              className={`transition-transform duration-300 ${
                safe ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* Content - collapsible */}
          {safe && (
            <div className="grid grid-cols-2 gap-2 mt-3">
              {percentOptions.map((p) => {
                const isActive = localScorePercent === p;

                return (
                  <button
                    key={p}
                    onClick={() => {
                      setLocalScorePercent(p);
                      maybeApplySingle("scorePercent");
                    }}
                    className={`text-sm py-2 px-3 border rounded-md transition ${
                      isActive
                        ? "bg-[#0A4D4A] text-white border-[#0A4D4A]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {p === 0 ? "All" : `${p}%+`}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Sliders */}
        <div>
          <label className="block text-xs font-medium text-gray-500 mt-3 mb-2">
            Duration (days)
          </label>
          <input
            type="range"
            min={1}
            max={50}
            value={localDuration}
            onChange={(e) => {
              setLocalDuration(Number(e.target.value));
              maybeApplySingle("duration");
            }}
            className="w-full accent-[#0A4D4A]"
          />
          <div className="text-xs text-gray-500 mt-1">{localDuration} days</div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-500 mt-3 mb-2">
            Age Range
          </label>
          <input
            type="range"
            min={12}
            max={50}
            value={localAge}
            onChange={(e) => {
              setLocalAge(Number(e.target.value));
              maybeApplySingle("age");
            }}
            className="w-full  accent-[#0A4D4A]"
          />
          <div className="text-xs text-gray-500 mt-1">{localAge} Years</div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-500 mt-3 mb-2">
            Budget (Rs)
          </label>
          <input
            type="range"
            min={0}
            max={200000}
            step={500}
            value={localBudget}
            onChange={(e) => {
              setLocalBudget(Number(e.target.value));
              maybeApplySingle("budget");
            }}
            className="w-full accent-[#0A4D4A]"
          />
          <div className="text-xs text-gray-500 mt-1">
            ₹{localBudget.toLocaleString()}
          </div>
        </div>

        {/* Apply Button (keeps backward compatibility) */}
        {!autoApply && (
          <button
            onClick={handleApply}
            className="mt-4 w-full bg-[#0A4D4A] text-white py-2 rounded-lg font-semibold hover:bg-[#0A4D4A] transition"
          >
            Apply Filter
          </button>
        )}
      </div>
    </div>
  );
}
