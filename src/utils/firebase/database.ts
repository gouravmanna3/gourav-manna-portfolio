import { getDatabase, ref, onValue, set } from "firebase/database";
import { app } from "./firebase.config";

const db = getDatabase(
  app,
  "https://resume-6478a-default-rtdb.firebaseio.com/"
);

export const dataRef = ref(db, "/starCount");

export const addStarCount = () => {
  onValue(
    dataRef,
    (snapshot) => {
      const currentValue = snapshot.val();
      const newValue = (currentValue || 0) + 1;
      set(dataRef, newValue);
    },
    { onlyOnce: true }
  );
};
