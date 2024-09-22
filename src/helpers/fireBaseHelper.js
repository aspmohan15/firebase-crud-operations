import { db } from "@/configs/fireBaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const addDataToFireStore = async (name, email, message) => {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      message: message,
    });
    console.log("Document write with that ID", docRef.id);
    return true;
  } catch (error) {
    console.error("Error Adding the document", error);
    return false;
  }
};

export const getDataFromFireBase = async () => {
  const querySnapShot = await getDocs(collection(db, "messages"));
  const data = [];
  querySnapShot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};
