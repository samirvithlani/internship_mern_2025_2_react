import React from 'react'

export const ArrayDemo2 = () => {

    var students =[
        {
            name:"Ram",
            age:22,
            marks:78
        },
        {
            name:"Shyam",
            age:24,
            marks:81
        },
        {
            name:"Arjun",
            age:21,
            marks:71
        },
        
    ]


  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:"red"}}>Array Demo 2</h1>
        {/* {students[0].name} */}
        {
            students.map((stu)=>{
                //return <li>{stu.name} - {stu.age} - {stu.marks}</li>
                return <div>
                    <h1>Name = {stu.name}</h1>
                    <h2>Age = {stu.age}</h2>
                    <h3>Marks = {stu.marks}</h3>
                </div>
                    
            })
        }
    </div>
  )
}
