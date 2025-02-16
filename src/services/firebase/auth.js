import { auth } from "./config";

export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const signOut = async () => {
  await auth.signOut();
};