import { useState } from "react";

export const useGuestForm = () => {
  const [attending, setAttending] = useState(-1);
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");

  const getTargetValue = (event) => event?.target?.value;

  const handleAttendingOnChange = (event) =>
    setAttending(getTargetValue(event));
  const handleLocationOnChange = (event) => setLocation(getTargetValue(event));
  const handleNameOnChange = (event) => setName(getTargetValue(event));

  return {
    attending,
    handleAttendingOnChange,
    handleLocationOnChange,
    handleNameOnChange,
    location,
    name,
  };
};
