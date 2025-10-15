import Link from "next/link";

export default function StudentInfo() {
  return (
    <section className="h-max-[50vh] flex w-full flex-col gap-4 rounded-2xl bg-purple-950 p-15">
      <h2 className="text-2xl font-bold">Louielyn Mata</h2>
      <h3 className="mt-5 text-lg font-semibold tracking-widest uppercase">
        Links
      </h3>
      <article>
        <ul>
          <li>
            Github:
            <Link
              className="ml-3 text-pink-200 hover:text-yellow-100 hover:underline"
              href="https://www.github.com/louielynmata/cprg306-assignments"
              alt="Louielyn Mata's CPRG306 Assignments"
              target="_blank"
            >
              louielynmata/cprg306-assignments
            </Link>
          </li>
        </ul>
      </article>
    </section>
  );
}
