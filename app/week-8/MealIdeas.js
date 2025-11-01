/** The MealIdeas component is responsible for fetching and displaying meal ideas based on a selected shopping list item. Here are a few things to keep in mind when creating this component.
1. Import Necessary Hooks and Begin Component Definition
Since this component uses useState and useEffect, start with the "use client" directive.
Import the useEffect and useState hooks from react.
This component should receive a single prop: ingredient.
*/
"use client";
import { useState, useEffect } from "react";
import { fetchMealIdeas } from "../hooks/fetchMealIdeas";

/**
 * MealIdeas Component
 * This component fetches and displays meal ideas based on the selected ingredient.
 */
export default function MealIdeas({ ingredient }) {
  // State Variables - meals
  const [meals, setMeals] = useState([]);
  // State Variables for loading and error states
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch meal ideas when the ingredient prop changes
  useEffect(() => {
    if (!ingredient) {
      setMeals([]); // Clear meals if no ingredient
      return;
    }

    // Run whenever ingredient changes
    async function loadMealIdeas() {
      // Turn on Loading state
      setIsLoading(true);
      // Reset error state before fetching
      setError(null);

      // Try fetching meal ideas
      try {
        const fetchMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchMeals ?? []); // Update meals state}
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false); // When done, turn off loading state
      }
    }

    loadMealIdeas();
  }, [ingredient]);

  // Handle different UI states
  // If no ingredient is provided, display a message prompting the user to select an item.
  if (!ingredient) {
    return (
      <section className="my-4">
        <h2 className="text-3xl font-semibold">Meal Ideas - Select Item</h2>
        <p>Choose an item to see ideas.</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="my-4">
        <h2 className="text-3xl font-semibold">Meal Ideas</h2>
        <p> Data is Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500">
        <h2 className="text-3xl font-semibold">Meal Ideas</h2>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!meals || meals.length === 0) {
    return (
      <section className="my-4">
        <h2 className="text-3xl font-semibold">Meal Ideas</h2>
        <p>No meal ideas found.</p>
      </section>
    );
  }

  // jsx list rendering of meal ideas
  return (
    <section className="my-4">
      <div>
        <h3 className="my-2 text-2xl">
          Meal Ideas for &quot;{ingredient}&quot;
        </h3>
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal} className="font-lg my-2">
              {meal.strMeal}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
