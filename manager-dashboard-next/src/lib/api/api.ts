export async function fetchData() {
  const res = await fetch("http://localhost:3001/register");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
