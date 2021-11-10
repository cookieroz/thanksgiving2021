import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export const useDatabase = (collectionPath) => {
  const createRecord = async (recordProps) => {
    try {
      const props = { ...recordProps, createdAt: serverTimestamp() };
      const createdRecord = await addDoc(collection(db, collectionPath), props);
      return { id: createdRecord.id };
    } catch (e) {
      console.log(`error: ${e}`);
      return {};
    }
  };

  const deleteRecord = async (id) => {
    try {
      await deleteDoc(doc(db, collectionPath, id));
    } catch (e) {
      console.log(`error: ${e}`);
    }
  };

  const getAll = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionPath));
      let data = [];
      querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));

      return data;
    } catch (e) {
      console.log(`error: ${e}`);
      return [];
    }
  };

  const getRecord = async (id) => {
    try {
      const docRef = await getDoc(collection(db, collectionPath, id));
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("No such document! -- docSnap", docSnap);
      }
    } catch (e) {
      console.log(`error: ${e}`);
    }
  };

  const updateRecord = async (id, propsToUpdate) => {
    try {
      const props = { ...propsToUpdate, updatedAt: serverTimestamp() };
      const docRef = doc(db, collectionPath, id);
      const data = await updateDoc(docRef, props);
      console.log("data in UPDATE", data);
    } catch (e) {
      console.log(`error: ${e}`);
    }
  };

  return {
    createRecord,
    deleteRecord,
    getAll,
    getRecord,
    updateRecord,
  };
};
