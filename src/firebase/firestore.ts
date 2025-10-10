import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "mi_coleccion"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
