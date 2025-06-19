'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    
    localStorage.clear();
    router.push("/signin");
  };

  return (
    <nav className="bg-blue-950 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">Challenges</Link>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
      >
        Logout
      </button>
    </nav>
  );
}

