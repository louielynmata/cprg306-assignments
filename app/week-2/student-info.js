import Link from "next/link";

export default function StudentInfo() {
  return (
    <section className="bg-purple-950 rounded-2xl p-15 w-full h-max-[50vh] flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Louielyn Mata</h2>
      <h3 className="text-lg font-semibold uppercase tracking-widest mt-5">
        Links
      </h3>
      <article>
        <ul>
          <li>
            Github:
            <Link
              className="text-pink-200 ml-3 hover:text-yellow-100 hover:underline"
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
