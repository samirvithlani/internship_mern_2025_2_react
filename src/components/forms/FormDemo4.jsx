import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {

    const {register,handleSubmit} = useForm()
    const submitHandler = (data)=>{
        console.log(data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>ORDER FOOD</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type='text' {...register("fname")}></input>
            </div>
            <div>
                <label>food-pref</label><br></br>
                VEG:<input type='radio' {...register("fpref")} value="veg"></input>
                NON-VEG:<input type='radio' {...register("fpref")} value="non-veg"></input>
                VEGAN:<input type='radio' {...register("fpref")} value="vegan"></input>
            </div>
            <div>
                <label>Toppings</label>
                Chesse :<input type='checkbox' value="cheese" {...register("toppings")}></input>
                sauce :<input type='checkbox' value="sauce" {...register("toppings")}></input>
                onion :<input type='checkbox' value="onion" {...register("toppings")}></input>
            </div>
            <div>
                <label>TIME</label>
                <input type='text'  {...register("preptime")}></input>
            </div>
            <div>
                <input type='submit' value="create"></input>
            </div>
        </form>
    </div>
  )
}
