import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">CPRG 306 Assignments</h1>
      
      <div className="w-full max-w-md bg-gray-900 shadow-lg rounded-lg p-6">
        <ul className="space-y-4">
          <li>
            <Link href="/week-1" className="block text-white hover:text-green-400 transition duration-300">
              Week 1 Assignment
            </Link>
          </li>
          <li>
            <Link href="/week-2" className="block text-white hover:text-green-400 transition duration-300">
              Week 2 Assignment
            </Link>
          </li>
          <li>
            <Link href="/week-3" className="block text-white hover:text-green-400 transition duration-300">
              Week 3 Assignment
            </Link>
          </li>
          <li>
            <Link href="/week-4" className="block text-white hover:text-green-400 transition duration-300">
              Week 4 Assignment
            </Link>
          </li>
          <li>
            <Link href="/week-5" className="block text-white hover:text-green-400 transition duration-300">
              Week 5 Assignment
            </Link>
          </li>
          <li>
            <Link href="/week-6" className="block text-white hover:text-green-400 transition duration-300">
              Week 6 Assignment
            </Link>
          </li>
          <li>
            <Link href="/week-7" className="block text-white hover:text-green-400 transition duration-300">
              Week 7 Assignment
            </Link>
          </li>
          <li>
            <Link href="/week-8" className="block text-white hover:text-green-400 transition duration-300">
              Week 8 Assignment
            </Link>
          </li>
          
        </ul>
      </div>
    </main>
  );
}
