/**
 * Fetch meal ideas based on the provided ingredient.
 * Focused on fetching and returning meal ideas data.
 * @param {*} ingredient
 * @returns {Promise<Array>|null} Array of meal ideas or null if no ingredient is provided.
 */
export async function fetchMealIdeas(ingredient) {
  if (!ingredient) {
    return null; // No ingredient yet
  }

  // API URL with ingredient query parameter
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  // Turn on loading state
  setIsLoading(true);
  // Reset error state before fetching
  setError(null);

  // Fetch request
  const response = await fetch(url);

  // Handle HTTP errors
  if (!response.ok) {
    throw new Error(
      `HTTP Response Error: ${response.status} ${response.statusText}`
    );
  }

  // Parse JSON repsonse
  const result = await res.json();

  // Return meals array from the result
  return result.meals;
}
