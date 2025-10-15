/*
Louielyn Mata - CRPG 306-B WEBDEV2
Assignment Week 4
*/
"use client";
import { React, useState } from "react";
import NewItem from "./new-item";
import { pageContainerMed, h1Styling } from "../styles";

export default function Page() {
  // State to hold data from child component
  const [formData, setFormData] = useState("");
  function handleChildData(data) {
    setFormData(data);
  }

  return (
    <main className={pageContainerMed}>
      <header>
        <h1 className={`${h1Styling} w-full`}>Week 5 - New Item</h1>
      </header>
      <NewItem onDataSend={handleChildData} />
    </main>
  );
}

// ✅ Step 5: Style with Tailwind CSS
// [ ] Add Tailwind utility classes for layout, spacing, and colors
//     Example: `className="p-4 bg-white rounded-lg shadow-md space-y-4"`
// [ ] Ensure the form looks clean and user-friendly

// ✅ Step 6: Test the Component
// [ ] Type values into all fields
// [ ] Submit the form
// [ ] Confirm that:
//     → An alert appears with correct data
//     → Form resets to initial state
//     → Console logs show the created item
