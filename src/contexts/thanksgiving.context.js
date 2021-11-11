import React, { useContext, useEffect, useMemo, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";

import { useAuth } from "./auth.context";
import { Loading } from "../components/loading";
import { useDatabase } from "../hooks/useDatabaseService.hook";

const ThanksgivingContext = React.createContext({});

export const useThanksgiving = () => useContext(ThanksgivingContext);

export const ThanksgivingProvider = ({ children }) => {
  const { currentUserUid } = useAuth();
  const { getAll: getAllGuests } = useDatabase(`guests`);

  const [currentGuest, setCurrentGuest] = useState({});
  const [error, setError] = useState(null);
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currentUserUid) {
      return;
    }
    const q = query(collection(db, "guests"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
      setGuests(data);
    });

    return () => unsubscribe;
  }, []);

  useEffect(() => {
    if (!currentUserUid) {
      return;
    }
    (async () => {
      try {
        setLoading(true);
        const allGuests = await getAllGuests();
        const cguest = [...allGuests]?.filter(
          (guest) => guest?.userUid === currentUserUid
        );

        setCurrentGuest(cguest[0]);
        setGuests(allGuests);
        setError(false);
        setLoading(false);
      } catch (e) {
        setError(`error loading data: ${e}`);
        setLoading(false);
      }
    })();
  }, [currentUserUid]);

  const potluck = useMemo(
    () => guests?.map(({ potluck }) => potluck),
    [guests]
  );

  const myGuests = useMemo(
    () =>
      guests?.filter(
        ({ id, parentGuestId }) =>
          parentGuestId === currentGuest.id || id === currentGuest.id
      ),
    [currentGuest.id, guests]
  );

  const data = useMemo(
    () => ({
      currentGuest,
      error,
      guests,
      myGuests,
      potluck,
      setGuests,
    }),
    [currentGuest, error, guests, myGuests, potluck]
  );

  return (
    <ThanksgivingContext.Provider value={data}>
      {loading ? <Loading /> : children}
    </ThanksgivingContext.Provider>
  );
};
