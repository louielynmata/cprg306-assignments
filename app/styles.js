// Global Tailwind CSS styling constants, they are stored in this file for reusability.

// Text Styling
export const linkStyling =
  "text-blue-300 font-semibold hover:underline hover:text-pink-200 p-2 inline-flex";

// Heading Styles
export const h1Styling = "text-3xl font-bold mb-3";

export const h2Styling = "text-2xl font-semibold mb-2";

// Container Styling
export const pageContainer =
  "flex min-h-screen flex-col items-center justify-center w-full mx-auto px-6 py-8 bg-slate-200 text-gray-700 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-500 sm:px-2 sm:py-4";

export const pageContainerMed =
  "flex min-h-screen flex-col items-center justify-center p-24 w-xl text-gray-700 bg-slate-200 dark:bg-gray-900 dark:text-gray-200 transition-colors transition-duration-500";

export const navContainer = "flex-auto flex-col gap-2 mt-5";

export const whiteContainer = "bg-white p-8 rounded-lg box-border shadow-md";

export const darkContainer =
  "bg-slate-100 dark:bg-slate-800 p-8 rounded-lg box-border shadow-md";

// Button Styling
export const buttonStyling =
  "py-3 px-6 rounded-md transition-all duration-200 hover:translate-y-1 box-shadow: var(--shadow-sm)";

// Input Styles

export const labelText = "block font-medium text-gray-700 my-2 pr-2";

export const inputStyling =
  "rounded border bg-sky-800 text-white focus:ring-2 focus:ring-blue-500 p-2";

export const formField = "my-4 flex flex-col";

// List Styling
export const itemListStyle =
  "border w-full border-slate-400 dark:border-slate-100 p-5 rounded-md gap-2";

export const boxContainer = "flex flex-col gap-3 w-full "; //for lists

export const itemListStyleButton =
  "border w-full border-slate-400 dark:border-slate-100 p-5 rounded-md gap-2 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200";

// Text Styles
export const secondaryText = "text-gray-600 dark:text-gray-400";
export const errorText = "text-red-600 font-semibold";
export const successText = "text-green-600 font-semibold";
export const infoText = "text-blue-600 font-semibold";
