import React, { useContext, useEffect, useMemo, useState } from "react";
import { Loading } from "../components/loading";
// import {auth} from "../firebase";
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

  const data = useMemo(
    () => ({
      currentGuest,
      error,
      guests,
      // potluck,
      setGuests,
      // setPotluck,
    }),
    []
  );

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
        const cguest = allGuests?.filter((guest) => guest?.user_uid === currentUserUid);
        console.log('cguest', cguest[0])
        setGuests(allGuests);
        // setPotluck(allPotluck);
        setCurrentGuest(cguest[0])
        setError(false);
        setLoading(false);
      } catch (e) {
        setError(`error loading data: ${e}`);
        setLoading(false);
      }
    })();
  }, [currentUserUid]);

  return (
    <ThanksgivingContext.Provider value={data}>
      {loading ? <Loading /> : children}
    </ThanksgivingContext.Provider>
  );
};
