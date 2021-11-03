import React, { useEffect } from "react";
import { useAuth } from "../../firebase";
import { useDatabase } from "../../hooks/useDatabaseService.hook";

export const Dashboard = () => {
  const { currentUser } = useAuth();
  const { getAll } = useDatabase(`guests`);

  console.log({ currentUser });

  useEffect(() => {
    getAll();
  }, []);

  return (
    <header className="App-header">
      <p>hello world!</p>
      <p>{`${currentUser?.displayName}'s dashboard`}</p>
    </header>
  );
};
