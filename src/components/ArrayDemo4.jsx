import React from "react";

export const ArrayDemo4 = () => {
  var employees = [
    {
      id: 101,
      name: "Ram",
      age: 25,
      salary: 15000,
      gender: "male",
    },
    {
      id: 102,
      name: "Seeta",
      age: 24,
      salary: 14000,
      gender: "female",
    },
    {
      id: 103,
      name: "Arjun",
      age: 26,
      salary: 18000,
      gender: "male",
    },
    {
      id: 104,
      name: "Sashdev",
      age: 24,
      salary: 16500,
      gender: "male",
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>EMPLOYEE TABLE</h1>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>SALARY</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
            {
                employees.map((emp)=>{
                    return <tr>
                        <td>{emp.id}</td>
                        <td>
                            <span style={{color:emp.name.startsWith("S")?"green":"white"}}>
                                {emp.name}
                            </span>
                        </td>
                        <td style={{backgroundColor:emp.age == 24 ? "blue":"black"}}>{emp.age}</td>
                        <td>
                            <span style={{color:emp.salary>=16000 ? "red":"white"}}>{emp.salary}</span>
                        </td>
                        <td style={{backgroundColor:emp.gender=="male"?"blue":"pink"}}>{emp.gender}</td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  );
};
