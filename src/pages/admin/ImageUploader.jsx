// src/components/admin/ImageUploader.jsx
import { getStorage, ref, uploadBytes } from "firebase/storage";

const handleImageUpload = async (file) => {
  const storage = getStorage();
  const storageRef = ref(storage, `sauces/${file.name}`);
  await uploadBytes(storageRef, file); // Directly upload to Firebase Storage
};