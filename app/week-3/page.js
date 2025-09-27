/*
Louielyn Mata - CRPG 306-B WEBDEV2
Assignment no. 3
*/
import ItemList from "./item-list";
import { pageContainerMed, h1Styling } from "../styles";

export default function Page() {
  return (
    <main className={pageContainerMed}>
      <h1 className={`${h1Styling} text-left w-full`}>Shopping List</h1>
      <section className="w-full">
        <ItemList />
      </section>
    </main>
  );
}
