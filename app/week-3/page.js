/*
Louielyn Mata - CRPG 306-B WEBDEV2
Assignment no. 3
*/
import ItemList from "./item-list";

export default function Page($pageContainer = "flex") {
  return (
    <main className={`${pageContainer}`}>
      <h1>Shopping List</h1>
      <section>
        <ItemList />
      </section>
    </main>
  );
}
