import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main className="m-auto flex min-h-screen max-w-2xl flex-col items-start justify-center gap-4 p-4">
      <h1 className="mb-5 text-3xl font-bold">Shopping List</h1>
      <StudentInfo />
    </main>
  );
}
