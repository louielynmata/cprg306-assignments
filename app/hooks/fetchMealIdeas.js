import { useState, useEffect } from "react";

/**
 *  Fetch meal ideas based on the provided ingredient.
 * @param {*} ingredient
 * @returns
 */
export async function FetchMealIdeas(ingredient) {
  // State Variables - meals
  const [meals, setMeals] = useState([]);
  // State Variables for loading and error states
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // API URL with ingredient query parameter
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  // Turn on loading state
  setIsLoading(true);
  // Reset error state before fetching
  setError(null);

  // Try fetching data
  try {
    // Fetch request
    const res = await fetch(url);

    // Handle HTTP errors
    if (!res.ok) {
      throw new Error(`HTTP Response Error: ${res.status} ${res.statusText}`);
    }

    // Parse JSON repsonse
    const result = await res.json();

    // Update meals state
    setMeals(result);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }

  useEffect(() => {
    fetchMealIdeas(url);
  }, [url]);

  // Return the meals that include the ingredient
  return { meals, error, isLoading };
}
