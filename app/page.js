import Link from "next/link";

export default function RootPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <header className="text-center">
        <h1 className="text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
        <nav className="mt-8">
          <ul>
            <li>
              <Link
                className="text-blue-300 font-semibold hover:underline hover:text-pink-200"
                href="/week-2"
              >
                Go to Week 2 →
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}
