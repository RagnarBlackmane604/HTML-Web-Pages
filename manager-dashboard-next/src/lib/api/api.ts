export async function fetchData() {
  const res = await fetch("http://localhost:3001/challenges");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
