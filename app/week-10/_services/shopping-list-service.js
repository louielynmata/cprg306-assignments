import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// getItems
export const getItems = async (userId) => {
  if (!userId) return [];
  try {
    const itemsColRef = collection(db, "users", userId, "items");
    const querySnapshot = await getDocs(itemsColRef);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error getting items: ", error);
    return [];
  }
};

// addItem
export const addItem = async (userId, item) => {
  if (!userId) throw new Error("User ID is required to add an item.");
  try {
    const itemsColRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsColRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item: ", error);
    throw error;
  }
};
