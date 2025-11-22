import { db } from "@/app/utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

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

// deleteItem
export const deleteItem = async (userId, itemId) => {
  if (!userId) throw new Error("User ID is required to delete an item.");
  if (!itemId) throw new Error("Item ID is required to delete an item.");
  try {
    const itemDoc = doc(db, "users", userId, "items", itemId);
    await deleteDoc(itemDoc);
  } catch (error) {
    console.error("Error deleting item: ", error);
    throw error;
  }
};
