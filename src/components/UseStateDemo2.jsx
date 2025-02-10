import React, { useState } from "react";

export const UseStateDemo2 = () => {

    const [isLoading, setisLoading] = useState(true)

    const stopLoading = ()=>{

        //isLoading = false
        setisLoading(false)
    }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>USE STATE DEMO 2</h1>
      <h1>
        {
            isLoading == true ? "Loading....":""
        }
      </h1>
      <button onClick={()=>{stopLoading()}}>stop</button>
    </div>
  );
};
