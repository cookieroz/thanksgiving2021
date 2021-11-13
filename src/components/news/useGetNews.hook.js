import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";

export const useGetNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "news"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => data.push(doc.data()));
      data.sort((a, b) => {
        const dateA = new Date(a.createdAt.seconds * 1000)
        const dateB = new Date(b.createdAt.seconds * 1000)
        return dateA < dateB ? 1 : -1;
      });
      setNews(data);
    });

    return () => unsub;
  }, []);

  return { news };
};
