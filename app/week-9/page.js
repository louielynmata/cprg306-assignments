/**
Louielyn Mata - CRPG 306-B WEBDEV2
Assignment Week 9
*/
"use client";
import Link from "next/link";
// Import the useUserAuth from AuthContext
import { useUserAuth } from "../contexts/AuthContext";
import {
  buttonStyling,
  pageContainer,
  h1Styling,
  darkContainer,
  whiteContainer,
} from "../styles";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Login Handle
  const handleLogin = async () => {
    try {
      // Sign in to Firebase with GitHub authentication
      await gitHubSignIn();
    } catch (error) {
      console.error("Error during GitHub sign-in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      // Sign out of Firebase
      await firebaseSignOut();
    } catch (error) {
      console.error("Sign-out failed", error);
    }
  };

  return (
    <main className={pageContainer}>
      {!user ? (
        // Not logged in, show login button
        <section className="text-center">
          <h1 className={h1Styling}>Week 9 - Welcome!</h1>
          <p>Please log in with your GitHub account.</p>
          <button
            className={`${buttonStyling} my-4 bg-sky-700 text-sky-50 hover:bg-sky-500 disabled:bg-blue-200 disabled:text-blue-400`}
            onClick={handleLogin}
          >
            Sign in with Github
          </button>
        </section>
      ) : (
        // Logged in, show user info and logout button
        <section className={darkContainer}>
          <h1 className={`${h1Styling}`}>
            Welcome,
            <br />
            {user.displayName} ({user.email})
          </h1>
          <div>
            <Link
              className={`${buttonStyling} my-4 me-2 inline-block cursor-pointer bg-violet-700 py-3 text-violet-50 hover:translate-y-1 hover:bg-violet-500`}
              href="/week-9/shopping-list"
            >
              Go to Shopping List
            </Link>
            <button
              className={`${buttonStyling} my-4 bg-sky-700 text-sky-50 hover:bg-sky-500 disabled:bg-blue-200 disabled:text-blue-400`}
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
