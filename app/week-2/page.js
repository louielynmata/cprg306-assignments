import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main className="min-h-screen p-4 max-w-2xl m-auto flex flex-col justify-center items-start gap-4">
      <h1 className="text-3xl font-bold mb-5">Shopping List</h1>
      <StudentInfo />
    </main>
  );
}
