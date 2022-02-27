import React, { useContext } from "react";

import {Mo} from "./CenterMobile";

export default function TopSubject() {
  const M  = useContext(Mo);

  return (
    <div className="text-center">
      <p
        type="button"
        icon={["fal", "coffee"]}
        onClick={() => {
          M.unset === true ? M.setF(false) : M.setF(true);
        }}
      >
        SUBJECT

      </p>
      
    </div>
  );
}
