import React, { useContext } from "react";
import MyContext from "../MyContext";

const Comp4 = () => {
  const username = useContext(MyContext); // get value from Comp1

  return (
    <div>
      <h2>Component 4</h2>
      <p>Received from Context: {username}</p>
    </div>
  );
};

export default Comp4;
