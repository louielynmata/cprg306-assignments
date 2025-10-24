/**
Louielyn Mata - CRPG 306-B WEBDEV2
Assignment Week 7
*/

import ItemList from "./item-list";
import { pageContainer, h1Styling, darkContainer } from "../styles";
import itemsData from "./items.json";

/**
 * Renders the main page for the shopping list application.
 * Displays a styled header and a section containing the ItemList component.
 *
 * @returns {JSX.Element} The main page component.
 */
export default function Page() {
  const itemsArray = itemsData;
  return (
    <main className={pageContainer}>
      <header>
        <h1 className={`${h1Styling} w-full text-sky-900 dark:text-sky-200`}>
          Shopping List - Week 7
        </h1>
      </header>
      <section className={`${darkContainer} mt-5 w-xl`}>
        {/* Render the ItemList component with itemsArray as props */}
        <ItemList items={itemsArray} />
      </section>
    </main>
  );
}
