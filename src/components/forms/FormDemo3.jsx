import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo3 = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data)
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FORM DEMO 3</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>NAME</label>
            <input type="text" placeholder="enter name" {...register("name")}></input>
        </div>
        <div>
            <label>Transport</label>
            Train:<input type="radio" value="train" {...register("transport")}></input>
            Flight:<input type="radio" value="flight" {...register("transport")}></input>
            Bus:<input type="radio" value="bus" {...register("transport")}></input>
        </div>
        <div>
            <label>CITY</label>
            <select {...register("city")}>
                <option value="ahmedabad">Ahmedabad</option>
                <option value="mumbai">Mumbai</option>
                <option value="pune">Pune</option>
            </select>
        </div>
        <div>
            <label>choice</label>
            <br></br>
            20km <input type="checkbox" {...register("choice")} value="20km"></input>
            swimming <input type="checkbox" {...register("choice")} value="swimming"></input>
            return <input type="checkbox" {...register("choice")} value="return"></input>
        </div>
        <div>
            <input type="submit" value="submit"></input>
        </div>
      </form>
    </div>
  );
};
