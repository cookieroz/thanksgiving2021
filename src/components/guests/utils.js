import { GUEST_FORM_FIELDS } from "./constants";
const {
  attending,
  displayPotluck,
  location,
  name,
  potluckDescription,
  potluckItem,
} = GUEST_FORM_FIELDS;

export const getPotluckValues = ({
  displayPotluck,
  potluckItem,
  potluckDescription,
}) => ({
  description: displayPotluck ? potluckDescription : "",
  item: displayPotluck ? potluckItem : "",
});

export const formatGuestData = (guestData) => {
  const potluck = getPotluckValues({ ...guestData });
  delete guestData[displayPotluck]
  delete guestData[potluckDescription]
  delete guestData[potluckItem]
  return {
    ...guestData,
    [attending]: guestData[attending],
    [location]: guestData[location],
    [name]: guestData[name],
    potluck,
  }
};
