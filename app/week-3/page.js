/**
Louielyn Mata - CRPG 306-B WEBDEV2
Assignment no. 3
*/
import ItemList from "./item-list";
import { pageContainerMed, h1Styling } from "../styles";

/**
 * Renders the main page for the shopping list application.
 * Displays a styled header and a section containing the ItemList component.
 *
 * @returns {JSX.Element} The rendered shopping list page.
 */
export default function Page() {
  return (
    <main className={pageContainerMed}>
      <h1 className={`${h1Styling} w-full text-left`}>Shopping List</h1>
      <section className="w-full">
        <ItemList />
      </section>
    </main>
  );
}
