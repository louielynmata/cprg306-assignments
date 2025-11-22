/**
Louielyn Mata - CRPG 306-B WEBDEV2
Assignment Week 9
*/
"use client";
import { useEffect, useState } from "react";
import { useUserAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  getItems,
  addItem,
} from "@/app/week-10/_services/shopping-list-service";
import ItemList from "./item-list";
import NewItem from "../../components/NewItem";
import MealIdeas from "./MealIdeas";
import {
  pageContainer,
  h1Styling,
  darkContainer,
  whiteContainer,
  buttonStyling,
} from "../../styles";

/**
 * Renders the main page for the shopping list application.
 * Displays a styled header and a section containing the ItemList component.
 *
 * @returns {JSX.Element} The main page component.
 */
export default function Page() {
  // Week 9 Implementation
  // Use the useUserAuth hook to get the user object
  const { user } = useUserAuth();
  // ITEMS STATE now driven by Firestore (starts empty)
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false); // loading indicator
  const [error, setError] = useState(""); // error message

  // State for selected items
  const [selectedItemName, setSelectedItemName] = useState(null);

  // GUARD - REDIRECT: Redirect to login if not authenticated
  const router = useRouter();
  useEffect(() => {
    // If user is not authenticated, redirect to login page
    if (!user) {
      router.push("/week-9/");
    }
  }, [user, router]);

  // Load items from Firestore for current user
  async function loadItems() {
    if (!user?.uid) return; // guard: wait for auth
    setLoading(true);
    setError("");
    try {
      const data = await getItems(user.uid);
      setItems(data);
    } catch (err) {
      console.error("Failed to load items", err);
      setError("Failed to load shopping list.");
    } finally {
      setLoading(false);
    }
  }

  // Fetch items when user becomes available
  useEffect(() => {
    if (user?.uid) {
      loadItems();
    }
  }, [user?.uid]);

  // Function to add new item to the list
  async function handleAddItem(newItem) {
    // newItem should be shape: { name, quantity, category, ... }
    if (!user?.uid) {
      setError("Not authenticated.");
      return;
    }
    if (!newItem?.name?.trim()) return;

    try {
      const id = await addItem(user.uid, {
        name: newItem.name.trim(),
        quantity: Number(newItem.quantity) || 1,
        category: newItem.category || "general",
        createdAt: Date.now(),
      });
      // Optimistically append to local state
      setItems((prev) => [...prev, { id, ...newItem }]);
    } catch (err) {
      console.error("Add item failed", err);
      setError("Could not add item.");
    }
  }

  // Function to handle item selection
  function handleItemSelect(item) {
    if (!item) {
      setSelectedItemName("");
      return;
    }
    // 1-Clean selected item name
    const withoutComma = item.name.split(",")[0];

    // 2- remove extra spaces
    const trimmed = withoutComma.trim();

    // 3 - remove emoji characters
    const cleaned = trimmed.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    // 4 - final trim and clean + lowercase for MealDB
    setSelectedItemName(cleaned.trim().toLowerCase());
  }

  // Guard clause: if no user, prompt to log in
  if (!user) {
    return (
      <main className={pageContainer}>
        <header>
          <h1>Please log in to view your shopping list.</h1>
        </header>
        <div>
          <Link
            className={`${buttonStyling} my-4 me-2 inline-block cursor-pointer bg-violet-700 py-3 text-violet-50 hover:translate-y-1 hover:bg-violet-500`}
            href="/week-9/"
          >
            Go to Login
          </Link>
        </div>
      </main>
    );
  }

  // Render JSX
  return (
    <main className={pageContainer}>
      <header>
        <h1
          className={`${h1Styling} align-start w-full text-sky-900 sm:p-2 dark:text-sky-200`}
        >
          <Link
            href="/week-9/"
            className="me-5 hover:cursor-pointer hover:text-white"
          >
            ←
          </Link>
          Shopping List - Week 10
        </h1>
      </header>

      <div className="mx-10 grid grid-cols-1 items-start gap-5 md:grid-cols-[320px_minmax(640px,1fr)_320px]">
        <section
          className={`${whiteContainer} sticky top-0 mt-5 max-h-screen overflow-y-auto text-slate-600 md:col-span-1 md:w-full dark:text-slate-300`}
        >
          <NewItem onAddItem={handleAddItem} />
        </section>

        <section className={`${darkContainer} mt-5 min-w-0`}>
          {/* Render the ItemList component with itemsArray as props */}
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </section>

        <section
          className={`${darkContainer} mt-5 md:col-span-1 md:w-full md:max-w-max`}
        >
          <MealIdeas ingredient={selectedItemName} />
        </section>
      </div>
    </main>
  );
}
