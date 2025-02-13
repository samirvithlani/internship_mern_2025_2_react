import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {

    const {handleSubmit,register,formState:{errors}}=useForm()

    const submitHandler = (data)=>{
        console.log(data)
    }

    const validationSchema  ={
        nameValidator:{
            required:{
                value:true,
                message:"name is reuired..."
            }
        },
        ageValidator:{
            required:{
                value:true,
                message:"age is required*"
            },
            min:{
                value:18,
                message:"min age 18"
            },
            max:{
                value:60,
                message:"max age 60"
            }
        },
        contactValidator:{
            required:{
                value:true,
                message:"contact is required*"
            },
            pattern:{
                //regex
                value:/[6-9]{1}[0-9]{9}/,
                message:"contact is not valid...."
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 6</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' placeholder='enter name' {...register("fname",validationSchema.nameValidator)}></input>
                <span style={{color:"red"}}>
                    {
                        errors.fname?.message
                    }
                </span>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' placeholder='enter age' {...register("age",validationSchema.ageValidator)}></input>
                <span style={{color:"red"}}>
                    {errors.age?.message}
                </span>
            </div>
            <div>
                <label>Contact</label>
                <input type='text' placeholder='enter contact' {...register("contact",validationSchema.contactValidator)}></input>
                <span style={{color:"red"}}>
                    {
                        errors.contact?.message
                    }
                </span>
            </div>
            <div>
                <input type='submit'></input>
            </div>

        </form>
    </div>
  )
}
