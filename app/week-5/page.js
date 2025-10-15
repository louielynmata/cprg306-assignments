/*
Louielyn Mata - CRPG 306-B WEBDEV2
Assignment Week 5
*/
"use client";
import { React, useState } from "react";
import NewItem from "./new-item";
import { pageContainer, h1Styling } from "../styles";

export default function Page() {
  // State to hold data from child component
  const [formData, setFormData] = useState("");
  function handleChildData(data) {
    setFormData(data);
  }

  return (
    <main className={pageContainer}>
      <header>
        <h1 className={`${h1Styling} w-full text-sky-900 dark:text-sky-200`}>
          Week 5 - New Item
        </h1>
      </header>
      <NewItem onDataSend={handleChildData} />
    </main>
  );
}
