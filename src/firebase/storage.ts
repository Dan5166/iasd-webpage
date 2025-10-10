import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from "./config";

const storage = getStorage(app);

export const getImageUrl = async (path: string) => {
  const fileRef = ref(storage, path);
  return await getDownloadURL(fileRef);
};
