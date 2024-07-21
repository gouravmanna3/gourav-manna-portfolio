import { getDatabase, ref, onValue, set } from "firebase/database";
import { app } from "./firebase.config";

const db = getDatabase(
  app,
  "https://resume-6478a-default-rtdb.firebaseio.com/"
);

export const starRef = ref(db, "/starCount");
export const locRef = ref(db, "/location");

export const addLocation = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const city = timezone.split("/")[1];
  onValue(
    locRef,
    (snapshot) => {
      const currentValue = snapshot.val();
      if (currentValue[city]) {
        currentValue[city] = currentValue[city] + 1;
      } else {
        currentValue[city] = 1;
      }
      set(locRef, currentValue);
    },
    { onlyOnce: true }
  );
};

export const addStarCount = () => {
  onValue(
    starRef,
    (snapshot) => {
      const currentValue = snapshot.val();
      const newValue = (currentValue || 0) + 1;
      set(starRef, newValue);
    },
    { onlyOnce: true }
  );
};
