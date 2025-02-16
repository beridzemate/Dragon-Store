// src/components/admin/AddProductForm.jsx
import { db } from "../../services/firebase/config";
import { collection, addDoc } from "firebase/firestore";

const handleSubmit = async (productData) => {
  await addDoc(collection(db, "products"), productData); // Directly write to Firestore
};