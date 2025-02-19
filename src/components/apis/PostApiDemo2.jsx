import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export const PostApiDemo2 = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = async(data)=>{
    console.log(data)

    const res = await axios.post("https://node5.onrender.com/user/user",data)
    if(res.status==201){
        alert("user added...")
    }

  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>POST API DEMO 2 post data using form</h1>
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
            <label>EMAIL</label>
            <input type="text" {...register("email")}></input>
        </div>
        <div>
            <label>STATUS</label>
            <input type="text" {...register("isActive")}></input>
        </div>
        <div>
            <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
