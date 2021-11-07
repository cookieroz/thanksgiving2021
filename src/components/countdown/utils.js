export const THANKSGIVING_DATE = "2021-11-27T16:00:00";
const thanksgivingDateTime = new Date(THANKSGIVING_DATE).getTime();
const getNowTime = () => new Date().getTime();

export const second = 1000;
export const minute = second * 60;
export const hour = minute * 60;
export const day = hour * 24;

export const getDistance = () => thanksgivingDateTime - getNowTime();
export const isPlural = (count, word) => (count === 1 ? `${count} ${word}` : `${count} ${word}s`);

export const getDaysPast = () => {
  const now = getNowTime();
  const distanceSince = now - thanksgivingDateTime;

  return Math.floor(distanceSince / day);
};

export const getCountdownMessage = () => {
  const distance = getDistance();

  if (distance < 0) {
    const daysPast = getDaysPast();
    return daysPast < hour * 12
      ? "Today is Thanksgiving!"
      : `${isPlural(daysPast, "day")} since Thanksgiving 2021.`;
  } else {
    return "Until Thanksgiving";
  }
};
