import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {


    const {register,handleSubmit,formState:{errors}} = useForm()
    console.log("errors",errors)
    const submitHandler = (data)=>{
        alert("subbmited...")
        console.log(data)
    }


    const validationSchema ={
        ageValidator:{
            required:{
                value:true,
                message:"Age is required"
            }
        },
        emailValidator:{
            required:{
                value:true,
                message:"email is required*"
            },
            minLength:{
                value:5,
                message:"lenght min 5*"
            }
        }
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM WITH VALIDATION.</h1>
        <form onSubmit={handleSubmit(submitHandler)}>

            <div>
                <label>NAME</label>
                <input type='text' placeholder='enter name' {...register("name",{required:{value:true,message:"Name is required*"}})}></input>
                {/* {errors.name.message} */}
                {/* {
                    errors.name && errors.name.message
                } */}
                {
                    errors.name?.message
                }
            </div>
            <div>
                <label>AGE</label>
                <input type='number' placeholder='enter age' {...register("age",validationSchema.ageValidator)}></input>
                <span>
                    {
                        errors.age?.message
                    }
                </span>
            </div>
            <div>
                <label>EMAIL</label>
                <input type='text' placeholder='enter email' {...register("email",validationSchema.emailValidator)}></input>
                <span style={{color:"red"}}>
                    {errors.email?.message}
                </span>
            </div>
            <div>
                <input type='submit'></input>
            </div>

        </form>
    </div>
  )
}
