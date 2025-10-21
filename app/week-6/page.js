/**
Louielyn Mata - CRPG 306-B WEBDEV2
Assignment Week 6
*/
import ItemList from "./item-list";
import { pageContainerMed, h1Styling, buttonStyling } from "../styles";
import itemsArray from "./items.json";

/**
 * Renders the main page for the shopping list application.
 * Displays a styled header and a section containing the ItemList component.
 *
 * itemsArray is imported from a JSON file and passed as props to the ItemList component.
 * @returns {JSX.Element} The rendered shopping list page.
 */
export default function Page() {
  return (
    <main className={pageContainerMed}>
      <h1 className={`${h1Styling} w-full text-sky-900 dark:text-sky-200`}>
        Shopping List - Week 6
      </h1>
      <section className="mt-2 mb-5 flex w-full items-center gap-2 align-middle">
        <p className="text-slate-300">Sort by: </p>
        <button
          className={`${buttonStyling} cursor-pointer bg-sky-700 text-sm text-sky-50 hover:bg-sky-500 active:bg-violet-700`}
        >
          Name
        </button>
        <button
          className={`${buttonStyling} cursor-pointer bg-sky-700 text-sm text-violet-50 hover:bg-sky-500 active:bg-violet-700`}
        >
          Category
        </button>
      </section>
      <section className="w-full">
        {/* Render the ItemList component with itemsArray as props */}
        <ItemList items={itemsArray} />
      </section>
    </main>
  );
}
