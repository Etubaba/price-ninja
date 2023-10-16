export const fetchData = async (url: string) => {
  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();
  return data;
};
