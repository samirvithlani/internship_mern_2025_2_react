import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo8 = () => {
  const { register, handleSubmit } = useForm();
  const [output, setOutput] = useState();
  const [isSubbmited, setisSubbmited] = useState(false);

  const submitHandler = (data) => {
    console.log(data); // {name:"",age:"",color:"#FFFF"}
    setOutput(data); // output -> //{name:"",age:"",color:"#FFFF"}
    setisSubbmited(true);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input type="text" {...register("age")}></input>
        </div>
        <div>
          <label>Color</label>
          <input type="color" {...register("color")}></input>
        </div>

        <div>
          <input type="submit" value="submit"></input>
        </div>
      </form>
      {isSubbmited == true ? (
        <div style={{color:output.color}}>
          <h1>Name ={output?.name}</h1>
          <h2>Age = {output?.age}</h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
