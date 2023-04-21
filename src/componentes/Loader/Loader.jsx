import React from "react";
import { Ring } from "@uiball/loaders";
import "./Loader.css"

function Loader() {
  return (
    <div className="loader-container">
      <Ring size={220} lineWeight={5} speed={3} color="red" />
    </div>
  );
}

export default Loader;