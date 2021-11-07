import React, { useContext, useEffect, useMemo, useState } from "react";

import { Loading } from "../components/loading";
import { useAuth } from "./auth.context";
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

  // const getAllData = async () => {
  //   try {
  //     const unsub = await auth.onAuthStateChanged((user) => {
  //       // added event listener
  //       setCurrentUser(user);
  //       // setLoading(false);
  //     });
  //     setUnsubscribe(unsub);
  //
  //   } catch (e) {
  //
  //   }
  // };

  // useEffect(() => {
  // 	const unsubscribe = auth.onAuthStateChanged((user) => {
  // 		// added event listener
  // 		setCurrentUser(user);
  // 		setLoading(false);
  // 	});
  // 	return unsubscribe;
  // }, []);

  useEffect(() => {
    if (!currentUserUid) {
      return;
    }
    (async () => {
      try {
        setLoading(true);
        const allGuests = await getAllGuests();
        // const allPotluck = await getAllPotluck();
        const cguest = [...allGuests]?.filter(
          (guest) => guest?.userUid === currentUserUid
        );
        console.log("cguest", cguest[0]);
        setCurrentGuest(cguest[0]);
        setGuests(allGuests);
        // setPotluck(allPotluck);
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
    () => guests?.filter(({ id }) => id === currentGuest.id),
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
