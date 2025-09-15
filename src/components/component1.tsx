import React from "react";
import MyContext from "../MyContext";
import Comp2 from "./component2";
const Comp1 = () => {
  const username = "Ahsan Asim"; // data to share

  return (
    <MyContext.Provider value={username}>
      <div>
        <h2>Component 1</h2>
        <Comp2 />
      </div>
    </MyContext.Provider>
  );
};

export default Comp1;
