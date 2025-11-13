// lib/api.ts
export const fetchData = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("API Error");
    return await res.json();
  } catch (error) {
    console.warn("API failed or not available:", error);
    return null; // if fail, fallback to dummy
  }
};
