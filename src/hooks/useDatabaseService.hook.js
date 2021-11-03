import { useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export const useDatabase = (collectionPath) => {
  const createRecord = async (recordProps) => {
    try {
      const createdRecord = await setDoc(doc(db, collectionPath), recordProps);
      console.log("createdREcord", createdRecord);
    } catch (e) {
      console.log(`error: ${e}`);
    }
  };

  const getAll = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionPath));
      let data = [];
      querySnapshot.forEach((doc) => {
        console.log("doc", doc);
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        data.push(doc.data());
      });

      console.log("data", data);
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
        console.log("Document data:", docSnap.data());
        return docSnap.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document! -- docSnap", docSnap);
      }
    } catch (e) {
      console.log(`error: ${e}`);
    }
  };

  const update = async (id, propsToUpdate) => {
    try {
      const docRef = await getDoc(collection(db, collectionPath, id));
      const data = await updateDoc(docRef, propsToUpdate);
      console.log("data in UPDATE", data);
    } catch (e) {
      console.log(`error: ${e}`);
    }
  };

  const deleteRecord = async (id) => {
    try {
      const docRef = await getDoc(collection(db, collectionPath, id));
      const data = await deleteDoc(docRef);
      console.log("data in DELETE", data);
    } catch (e) {
      console.log(`error: ${e}`);
    }
  };

  return {
    createRecord,
    deleteRecord,
    getAll,
    getRecord,
    update,
  };
};

export const useDatabaseService = (service) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const callDbService = async (args) => {
  	if (!service) {
  		return;
	  }
    setLoading(true);
    try {
      const serviceData = service(args);
	    console.log("serviceData in call db:", serviceData);
      if (serviceData) {
	      setData(serviceData)
      } else {
        console.log("No data");
      }
      setLoading(false);
    } catch (e) {
      console.log("Error getting document serviceData:", e);
      setError(`Error getting document: ${e}`);
      setLoading(false);
    }
  };

  return {
    data,
    callDbService,
    error,
    loading,
  };
};
