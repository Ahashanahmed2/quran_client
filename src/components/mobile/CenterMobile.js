import React, { useState } from "react";
import CenterMobileMain from "./CenterMobileMain";
import CenterMobileSubject from "./CenterMobileSubject";

export const Mo = React.createContext();

export default function CenterMobile() {
  const [state, setstate] = useState(true);
  const setF = (f) => {
    setstate(() => f );
  };

  return (
    <>
      <Mo.Provider value={{ setF: setF, unset: state }}>
        {state ? (
          <div className="text-light bg-dark">
            <CenterMobileMain />"
          </div>
        ) : (
          <CenterMobileSubject />
        )}
      </Mo.Provider>
    </>
  );
}
