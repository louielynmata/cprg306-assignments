import { buttonStyling } from "../styles";

export default function SortButtons({ sortBy, setSortBy }) {
  /**
   * Get the button selected state styling.
   * @param {*} field - The field to check.
   */
  const btnSelected = (field) => {
    return sortBy === field
      ? "bg-violet-700 text-sky-50 hover:bg-violet-700"
      : "bg-sky-700 text-violet-50 hover:bg-sky-500";
  };

  return (
    /* Section for Sort Buttons */
    <section
      className={`mt-2 mb-5 flex w-full items-center justify-start gap-2 align-middle`}
    >
      <p className="text-slate-600 dark:text-slate-300">Sort by: </p>
      <button
        className={`${buttonStyling} cursor-pointer text-sm active:bg-violet-700 ${btnSelected("name")}`}
        onClick={() => setSortBy("name")}
      >
        Name
      </button>
      <button
        className={`${buttonStyling} cursor-pointer text-sm active:bg-violet-700 ${btnSelected("category")}`}
        onClick={() => setSortBy("category")}
      >
        Category
      </button>
      <button
        className={`${buttonStyling} cursor-pointer text-sm active:bg-violet-700 ${btnSelected("group")}`}
        onClick={() => setSortBy("group")}
      >
        Group by Category
      </button>
    </section>
  );
}
