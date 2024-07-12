import { FaStar, FaRegStar } from "react-icons/fa";
import { onValue } from "firebase/database";
import { addStarCount, dataRef } from "../../utils/firebase/database";
import { useEffect, useState } from "react";

const Star = () => {
  const [starCount, setStarCount] = useState(0);
  const [starClicked, setStarClicked] = useState(false);

  useEffect(() => {
    const starClicked = localStorage.getItem("star");
    onValue(
      dataRef,
      (snapshot) => {
        const data = snapshot.val();
        setStarCount(data);
        setStarClicked(Boolean(starClicked));
      },
      (error) => console.log("error", error)
    );
  }, []);

  const handleStarClick = () => {
    if (!starClicked) {
      addStarCount();
      setStarClicked((prev) => !prev);
      localStorage.setItem("star", "true");
    }
  };
  return (
    <>
      <button
        data-tooltip-target="star-tooltip"
        data-tooltip-placement="bottom"
        type="button"
        className="flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 md:px-3 rounded-lg"
        onClick={handleStarClick}
      >
        {starClicked ? <FaStar /> : <FaRegStar />}
        Star
        <span className="inline-flex items-center justify-center w-4 h-4 ms-1 p-2 md:p-3 text-xs font-semibold text-slate-800 bg-blue-200 rounded-full">
          {starCount}
        </span>
      </button>
      <div
        id="star-tooltip"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Give a Star &#127775;
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
};

export default Star;
