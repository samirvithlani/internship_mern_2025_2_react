import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo7 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  const validationSchema = {
    nameValidator :{
        required:{
            value:true,
            message:"name is required*"
        }
    },
    refcodeValodator:{
        required:{
            value:true,
            message:"ref code is required.."
        },
        validate:(value)=>{

            return value =="royal" || "ref code must be royal"
        }
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FORM DEMO </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input
            type="text"
            {...register("name",validationSchema.nameValidator)}
            placeholder="enter name"
          ></input>
          <span style={{color:"red"}}>
            {
                errors.name?.message
            }
          </span>
        </div>

        <div>
            <label>REF CODE</label>
            <input type="text" placeholder="enter ref code" {...register("refcode",validationSchema.refcodeValodator)}></input>
            {
                errors.refcode?.message
            }
        </div>
        <div>
            <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
