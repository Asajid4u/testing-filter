
// // Filters

// "use client";

// import { useEffect, useState } from "react";
// import { Search, Mic, X } from "lucide-react";
// import { useRouter } from "next/navigation";

// type Props = {
//   // core filters (parent state / setters)
//   query: string;
//   setQuery: (v: string) => void;

//   age: number;
//   setAge: (n: number) => void;

//   duration: number;
//   setDuration: (n: number) => void;

//   budget: number;
//   setBudget: (n: number) => void;

//   // ratings / scores (parent should use these in predicate)
//   minRating: number;
//   setMinRating: (n: number) => void;

//   minSafeScore: number;
//   setMinSafeScore: (n: number) => void;

//   // optional match and score percent filters (parent may use or ignore)
//   matchPercent?: number;
//   setMatchPercent?: (n: number) => void;

//   scorePercent?: number;
//   setScorePercent?: (n: number) => void;

//   // optional behaviour
//   autoApply?: boolean; // when true, apply changes immediately instead of waiting for "Apply"

//   // optional clear handler (parent can also derive clear by resetting setter props)
//   onClear?: () => void;
// };

// export default function Filters({
//   query,
//   setQuery,
//   age,
//   setAge,
//   duration,
//   setDuration,
//   budget,
//   setBudget,
//   minRating,
//   setMinRating,
//   minSafeScore,
//   setMinSafeScore,
//   matchPercent = 0,
//   setMatchPercent,
//   scorePercent = 0,
//   setScorePercent,
//   autoApply = false,
//   onClear,
// }: Props) {
//   const Router = useRouter();

//   // Local (staged) state — user manipulates these until they press Apply (unless autoApply=true)
//   const [localQuery, setLocalQuery] = useState(query);
//   const [localAge, setLocalAge] = useState(age);
//   const [localDuration, setLocalDuration] = useState(duration);
//   const [localBudget, setLocalBudget] = useState(budget);

//   // Radios (local)
//   const [localMinRating, setLocalMinRating] = useState<number>(minRating ?? 0);
//   const [localMinSafeScore, setLocalMinSafeScore] = useState<number>(minSafeScore ?? 0);
//   const [localMatchPercent, setLocalMatchPercent] = useState<number>(matchPercent ?? 0);
//   const [localScorePercent, setLocalScorePercent] = useState<number>(scorePercent ?? 0);

//   // Languages
//   const [inputLang, setInputLang] = useState("");
//   const [languages, setLanguages] = useState<string[]>(["English"]);

//   // Sync local state when parent props change externally
//   useEffect(() => setLocalQuery(query), [query]);
//   useEffect(() => setLocalAge(age), [age]);
//   useEffect(() => setLocalDuration(duration), [duration]);
//   useEffect(() => setLocalBudget(budget), [budget]);

//   useEffect(() => setLocalMinRating(minRating ?? 0), [minRating]);
//   useEffect(() => setLocalMinSafeScore(minSafeScore ?? 0), [minSafeScore]);
//   useEffect(() => setLocalMatchPercent(matchPercent ?? 0), [matchPercent]);
//   useEffect(() => setLocalScorePercent(scorePercent ?? 0), [scorePercent]);

//   // Helpers
//   const addLang = () => {
//     const v = inputLang.trim();
//     if (!v) return;
//     if (!languages.includes(v)) setLanguages((s) => [...s, v]);
//     setInputLang("");
//   };
//   const removeLang = (l: string) => setLanguages((s) => s.filter((x) => x !== l));

//   const startVoice = () => {
//     // demo hook — populate localQuery as example
//     // replace with Web Speech API if you want real voice input
//     alert("Voice search demo — this will populate the destination field.");
//   };

//   // Apply local state to parent
//   const handleApply = () => {
//     setQuery(localQuery);
//     setAge(localAge);
//     setDuration(localDuration);
//     setBudget(localBudget);

//     setMinRating(localMinRating);
//     setMinSafeScore(localMinSafeScore);

//     if (setMatchPercent) setMatchPercent(localMatchPercent);
//     if (setScorePercent) setScorePercent(localScorePercent);
//   };

//   // Clear all (local + optionally parent if autoApply)
//   const handleClearAll = () => {
//     // reset local
//     setLocalQuery("");
//     setLocalAge(18);
//     setLocalDuration(7);
//     setLocalBudget(0);
//     setLanguages(["English"]);
//     setInputLang("");
//     setLocalMinRating(0);
//     setLocalMinSafeScore(0);
//     setLocalMatchPercent(0);
//     setLocalScorePercent(0);

//     // optionally apply immediately
//     if (autoApply) {
//       setQuery("");
//       setAge(18);
//       setDuration(7);
//       setBudget(0);
//       setMinRating(0);
//       setMinSafeScore(0);
//       if (setMatchPercent) setMatchPercent(0);
//       if (setScorePercent) setScorePercent(0);
//     }

//     // call parent clear handler if provided
//     onClear?.();
//   };

//   // Optionally apply single controls immediately
//   const maybeApplySingle = (field: "query" | "age" | "duration" | "budget" | "minRating" | "minSafeScore" | "matchPercent" | "scorePercent") => {
//     if (!autoApply) return;
//     switch (field) {
//       case "query":
//         setQuery(localQuery);
//         break;
//       case "age":
//         setAge(localAge);
//         break;
//       case "duration":
//         setDuration(localDuration);
//         break;
//       case "budget":
//         setBudget(localBudget);
//         break;
//       case "minRating":
//         setMinRating(localMinRating);
//         break;
//       case "minSafeScore":
//         setMinSafeScore(localMinSafeScore);
//         break;
//       case "matchPercent":
//         setMatchPercent?.(localMatchPercent);
//         break;
//       case "scorePercent":
//         setScorePercent?.(localScorePercent);
//         break;
//     }
//   };

//   // Radio group options
//   const ratingOptions = [4, 3, 2, 0] as const; // 0 == Any
//   const safeOptions = [75, 50, 0] as const; // 0 == Any
//   const percentOptions = [90, 70, 50, 0] as const; // 0 == Any

//   return (
//     <div className="bg-white p-5 rounded-xl shadow w-full max-w-md mx-auto">
//       {/* Header */}
//       <div className="flex items-center gap-3">
//         <button className="text-sm text-gray-600 hover:text-gray-800 transition" onClick={() => Router.push("/")}>
//           ← Back
//         </button>
//         <button onClick={handleClearAll} className="ml-auto text-sm text-gray-600 hover:underline">
//           Clear all filters
//         </button>
//       </div>

//       <div className="mt-4 space-y-4">
//         {/* Destination input (local only) */}
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
//           <input
//             value={localQuery}
//             onChange={(e) => {
//               setLocalQuery(e.target.value);
//               maybeApplySingle("query");
//             }}
//             placeholder="Destination typing..."
//             className="w-full pl-9 pr-10 py-2 rounded-md border text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB5757]"
//           />
//           <button
//             type="button"
//             onClick={() => startVoice()}
//             aria-label="Voice Search"
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#EB5757] transition-colors"
//           >
//             <Mic className="w-4 h-4" />
//           </button>
//         </div>

//         {/* Quick tags */}

//         <div className="flex flex-wrap gap-2 mt-2">
//           {["Locals", "Nearby", "Starting point"].map((tag) => (
//             <button
//               key={tag}
//               onClick={() => {
//                 setLocalQuery(tag);
//                 maybeApplySingle("query");
//               }}
//               className="px-3 py-1 bg-rose-50 text-sm text-gray-600 rounded-full  hover:bg-rose-100 transition"
//             >
//               {tag}
//             </button>
//           ))}
//         </div>

//         {/* Language input */}
//         <div>
//           <label className="block text-xs font-medium text-gray-500 mb-2">Language</label>
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <input
//               value={inputLang}
//               onChange={(e) => setInputLang(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && addLang()}
//               placeholder="Language typing..."
//               className="w-full pl-9 pr-20 py-2 rounded-md border text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB5757]"
//             />
//             <button onClick={addLang} className="absolute right-3 top-1/2 -translate-y-1/2  text-gray-600 text-sm font-medium hover:underline">
//               Add
//             </button>
//           </div>

//           <div className="mt-3 flex flex-wrap gap-2">
//             {languages.map((l) => (
//               <div key={l} className="flex items-center gap-2 bg-white  text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
//                 <span>{l}</span>
//                 <button onClick={() => removeLang(l)}>
//                   <X className="w-3 h-3" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Minimum Rating (single-choice radios) */}
//         <div>
//           <h3 className="mt-2 font-medium text-sm">Minimum Rating</h3>
//           <div className="flex flex-col mt-2 text-sm text-gray-700">
//             {ratingOptions.map((r) => (
//               <label key={r} className="flex items-center gap-2 cursor-pointer">
//                 <input
//                 className="bg-[#0A4D4A] text-[#0A4D4A]"
//                   type="radio"
//                   name="minRating"
//                   checked={localMinRating === r}
//                   onChange={() => {
//                     setLocalMinRating(r);
//                     maybeApplySingle("minRating");
//                   }}
//                 />
//                 <span>{r === 0 ? "Any" : `${r}.0+`}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Match Percentage (single-choice radios) */}
//         <div>
//           <h3 className="mt-2 font-medium text-sm">Match Percentage</h3>
//           <div className="flex flex-col mt-2 text-sm text-gray-700">
//             {percentOptions.map((p) => (
//               <label key={p} className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="matchPercent"
//                   checked={localMatchPercent === p}
//                   onChange={() => {
//                     setLocalMatchPercent(p);
//                     maybeApplySingle("matchPercent");
//                   }}
//                 />
//                 <span>{p === 0 ? "Any" : `${p}%+`}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Score Percentage (single-choice radios) */}
//         <div>
//           <h3 className="mt-2 font-medium text-sm">Score Percentage</h3>
//           <div className="flex flex-col mt-2 text-sm text-gray-700">
//             {percentOptions.map((p) => (
//               <label key={p} className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="scorePercent"
//                   checked={localScorePercent === p}
//                   onChange={() => {
//                     setLocalScorePercent(p);
//                     maybeApplySingle("scorePercent");
//                   }}
//                 />
//                 <span>{p === 0 ? "Any" : `${p}%+`}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Sliders */}
//         <div>
//           <label className="block text-xs font-medium text-gray-500 mt-3 mb-2">Duration (days)</label>
//           <input
//             type="range"
//             min={1}
//             max={50}
//             value={localDuration}
//             onChange={(e) => {
//               setLocalDuration(Number(e.target.value));
//               maybeApplySingle("duration");
//             }}
//             className="w-full accent-[#0A4D4A]"
//           />
//           <div className="text-xs text-gray-500 mt-1">{localDuration} days</div>
//         </div>

//         <div>
//           <label className="block text-xs font-medium text-gray-500 mt-3 mb-2">Age Range</label>
//           <input
//             type="range"
//             min={12}
//             max={50}
//             value={localAge}
//             onChange={(e) => {
//               setLocalAge(Number(e.target.value));
//               maybeApplySingle("age");
//             }}
//             className="w-full  accent-[#0A4D4A]"
//           />
//           <div className="text-xs text-gray-500 mt-1">{localAge} Years</div>
//         </div>

//         <div>
//           <label className="block text-xs font-medium text-gray-500 mt-3 mb-2">Budget (Rs)</label>
//           <input
//             type="range"
//             min={0}
//             max={200000}
//             step={500}
//             value={localBudget}
//             onChange={(e) => {
//               setLocalBudget(Number(e.target.value));
//               maybeApplySingle("budget");
//             }}
//             className="w-full accent-[#0A4D4A]"
//           />
//           <div className="text-xs text-gray-500 mt-1">₹{localBudget.toLocaleString()}</div>
//         </div>

//         {/* Apply Button (keeps backward compatibility) */}
//         {!autoApply && (
//           <button onClick={handleApply} className="mt-4 w-full bg-[#0A4D4A] text-white py-2 rounded-lg font-semibold hover:bg-[#0A4D4A] transition">
//             Apply Filter
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Search, Mic, X } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  query: string;
  setQuery: (v: string) => void;

  age: number;
  setAge: (n: number) => void;

  duration: number;
  setDuration: (n: number) => void;

  budget: number;
  setBudget: (n: number) => void;

  minRating: number;
  setMinRating: (n: number) => void;

  minSafeScore: number;
  setMinSafeScore: (n: number) => void;

  matchPercent?: number;
  setMatchPercent?: (n: number) => void;

  scorePercent?: number;
  setScorePercent?: (n: number) => void;

  autoApply?: boolean;
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

  const [localQuery, setLocalQuery] = useState(query);
  const [localAge, setLocalAge] = useState(age);
  const [localDuration, setLocalDuration] = useState(duration);
  const [localBudget, setLocalBudget] = useState(budget);

  const [localMinRating, setLocalMinRating] = useState<number>(minRating ?? 0);
  const [localMinSafeScore, setLocalMinSafeScore] = useState<number>(minSafeScore ?? 0);
  const [localMatchPercent, setLocalMatchPercent] = useState<number>(matchPercent ?? 0);
  const [localScorePercent, setLocalScorePercent] = useState<number>(scorePercent ?? 0);

  const [inputLang, setInputLang] = useState("");
  const [languages, setLanguages] = useState<string[]>(["English"]);

  useEffect(() => setLocalQuery(query), [query]);
  useEffect(() => setLocalAge(age), [age]);
  useEffect(() => setLocalDuration(duration), [duration]);
  useEffect(() => setLocalBudget(budget), [budget]);

  useEffect(() => setLocalMinRating(minRating ?? 0), [minRating]);
  useEffect(() => setLocalMinSafeScore(minSafeScore ?? 0), [minSafeScore]);
  useEffect(() => setLocalMatchPercent(matchPercent ?? 0), [matchPercent]);
  useEffect(() => setLocalScorePercent(scorePercent ?? 0), [scorePercent]);

  const addLang = () => {
    const v = inputLang.trim();
    if (!v) return;
    if (!languages.includes(v)) setLanguages((s) => [...s, v]);
    setInputLang("");
  };
  const removeLang = (l: string) => setLanguages((s) => s.filter((x) => x !== l));

  const startVoice = () => {
    alert("Voice search demo — this will populate the destination field.");
  };

  // Apply local state to parent (full apply)
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

  // Clear all (always reset both local and parent so right-side trips show all)
  const handleClearAll = () => {
    // reset local
    setLocalQuery("");
    setLocalAge(18);
    setLocalDuration(7);
    setLocalBudget(0);
    setLanguages(["English"]);
    setInputLang("");
    setLocalMinRating(0);
    setLocalMinSafeScore(0);
    setLocalMatchPercent(0);
    setLocalScorePercent(0);

    // ALWAYS apply to parent so trip list resets immediately
    setQuery("");
    setAge(18);
    setDuration(7);
    setBudget(0);
    setMinRating(0);
    setMinSafeScore(0);
    if (setMatchPercent) setMatchPercent(0);
    if (setScorePercent) setScorePercent(0);

    onClear?.();
  };

  // NOTE: changed to ALWAYS apply single control to parent immediately.
  // This makes each control independent. If you prefer staged apply, set autoApply=false
  // and use the Apply button. Keeping both paths for backwards compatibility.
  const maybeApplySingle = (field: "query" | "age" | "duration" | "budget" | "minRating" | "minSafeScore" | "matchPercent" | "scorePercent") => {
    // if autoApply is false, we still call the parent setter for immediate per-control behaviour.
    // If you want strict staged behavior, you can change this to `if (!autoApply) return;`
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

  const ratingOptions = [4, 3, 2, 0] as const;
  const safeOptions = [75, 50, 0] as const;
  const percentOptions = [90, 70, 50, 0] as const;

  return (
    <div className="bg-white p-5 rounded-xl shadow w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button className="text-sm text-gray-600 hover:text-gray-800 transition" onClick={() => Router.push("/")}>
          ← Back
        </button>
        <button onClick={handleClearAll} className="ml-auto text-sm text-gray-600 hover:underline">
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

        <div>
          <label className="block text-xs font-medium text-gray-500 mb-2">Language</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              value={inputLang}
              onChange={(e) => setInputLang(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addLang()}
              placeholder="Language typing..."
              className="w-full pl-9 pr-20 py-2 rounded-md border text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB5757]"
            />
            <button onClick={addLang} className="absolute right-3 top-1/2 -translate-y-1/2  text-gray-600 text-sm font-medium hover:underline">
              Add
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {languages.map((l) => (
              <div key={l} className="flex items-center gap-2 bg-white  text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                <span>{l}</span>
                <button onClick={() => removeLang(l)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mt-2 font-medium text-sm">Minimum Rating</h3>
          <div className="flex flex-col mt-2 text-sm text-gray-700">
            {ratingOptions.map((r) => (
              <label key={r} className="flex items-center gap-2 cursor-pointer">
                <input
                  className="bg-[#0A4D4A] text-[#0A4D4A]"
                  type="radio"
                  name="minRating"
                  checked={localMinRating === r}
                  onChange={() => {
                    setLocalMinRating(r);
                    maybeApplySingle("minRating");
                  }}
                />
                <span>{r === 0 ? "Any" : `${r}.0+`}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mt-2 font-medium text-sm">Match Percentage</h3>
          <div className="flex flex-col mt-2 text-sm text-gray-700">
            {percentOptions.map((p) => (
              <label key={p} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="matchPercent"
                  checked={localMatchPercent === p}
                  onChange={() => {
                    setLocalMatchPercent(p);
                    maybeApplySingle("matchPercent");
                  }}
                />
                <span>{p === 0 ? "Any" : `${p}%+`}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mt-2 font-medium text-sm">Score Percentage</h3>
          <div className="flex flex-col mt-2 text-sm text-gray-700">
            {percentOptions.map((p) => (
              <label key={p} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="scorePercent"
                  checked={localScorePercent === p}
                  onChange={() => {
                    setLocalScorePercent(p);
                    maybeApplySingle("scorePercent");
                  }}
                />
                <span>{p === 0 ? "Any" : `${p}%+`}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-500 mt-3 mb-2">Duration (days)</label>
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
          <label className="block text-xs font-medium text-gray-500 mt-3 mb-2">Age Range</label>
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
          <label className="block text-xs font-medium text-gray-500 mt-3 mb-2">Budget (Rs)</label>
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
          <div className="text-xs text-gray-500 mt-1">₹{localBudget.toLocaleString()}</div>
        </div>

        {!autoApply && (
          <button onClick={handleApply} className="mt-4 w-full bg-[#0A4D4A] text-white py-2 rounded-lg font-semibold hover:bg-[#0A4D4A] transition">
            Apply Filter
          </button>
        )}
      </div>
    </div>
  );
}
