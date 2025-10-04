/*
Louielyn Mata - CRPG 306-B WEBDEV2
Assignment Week 4
*/
import NewItem from "./new-item";
import { pageContainerMed, h1Styling } from "../styles";

export default function Page() {
  return (
    <main className={pageContainerMed}>
      <header>
        <h1 className={`${h1Styling} w-full`}>Add New Item</h1>
      </header>
      <NewItem />
    </main>
  );
}
