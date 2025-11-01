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
  <LoadMealIdeas ingredient={ingredient} />;
}

export function LoadMealIdeas(ingredient) {
  // This function should call fetchMealIdeas with the ingredient prop and store the result in the meals state variable.

  // FetchMealIdeas.js
  FetchMealIdeas(ingredient);
  if (error) {
    return (
      <div className="bg-red-500">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
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
  if (!data) {
    return (
      <section className="my-4">
        <h2 className="text-3xl font-semibold">Meal Ideas</h2>
        <p>No meal ideas found.</p>
      </section>
    );
  }
  return (
    <section className="my-4">
      <div>
        <h3 className="my-2 text-2xl">
          Meal Ideas for &quot;{ingredient}&quot;
        </h3>
        <ul>
          {meals.map((item) => (
            <li key={Item.id} className="font-lg my-2">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
