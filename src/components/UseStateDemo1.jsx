import React, { useState } from "react";

export const UseStateDemo1 = () => {
  //var count =0;
  const [count, setCount] = useState(0);
  //count -->variable... state variable..
  //setCount --->function ... if count needs to update or change use setCount function..
  //useState(0)
  function test() {
    alert("test function called....");
  }

  const increseCount = () => {
    setCount(count + 1);
    //  count++
    //console.log("count",count)
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>USE STATE DEMO 1</h1>
      <button onClick={test}>CLICK</button>
      <button
        onClick={() => {
          test();
        }}
      >
        CLICK
      </button>
      <h1>count = {count}</h1>
      <button
        onClick={() => {
          increseCount();
        }}
      >
        increse
      </button>
    </div>
  );
};
