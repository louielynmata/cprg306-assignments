"use client";
import { useState, useEffect } from "react";
import { fetchMealIdeas } from "../hooks/fetchMealIdeas";
import {
  h2Styling,
  secondaryText,
  errorText,
  boxContainer,
  itemListStyle,
} from "../styles";

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
        setError(error.message);
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
        <h2 className={h2Styling}>
          Meal Ideas{" "}
          <span className={secondaryText}>
            <br />
            Select Item
          </span>
        </h2>
        <p>Choose an item to see ideas.</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="my-4">
        <h2 className={h2Styling}>Meal Ideas</h2>
        <p className={secondaryText}> Data is Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500">
        <h2 className={h2Styling}>Meal Ideas</h2>
        <p className={errorText}>Error: {error}</p>
      </div>
    );
  }

  if (!meals || meals.length === 0) {
    return (
      <section className="my-4">
        <h2 className={h2Styling}>Meal Ideas</h2>
        <p className={secondaryText}>No meal ideas found.</p>
      </section>
    );
  }

  // jsx list rendering of meal ideas
  return (
    <section className="my-4">
      <div>
        <h3 className={h2Styling}>
          Meal Ideas for{" "}
          <span className={secondaryText}>
            &quot;
            {ingredient}&quot;
          </span>
        </h3>
        <ul className={boxContainer}>
          {meals.map((meal) => (
            <li key={meal.idMeal} className={`${itemListStyle}`}>
              {meal.strMeal}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
