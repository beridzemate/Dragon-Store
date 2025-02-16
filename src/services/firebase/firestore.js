import { db } from "./config";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";

// Products
export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addProduct = async (product) => {
  await addDoc(collection(db, "products"), product);
};

export const deleteProduct = async (productId) => {
  await deleteDoc(doc(db, "products", productId));
};