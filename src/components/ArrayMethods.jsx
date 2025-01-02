import React from 'react'

const ArrayMethods = () => {

    const people = [
        { id: 1, name: 'John Doe', age: 28 },
        { id: 2, name: 'Jane Smith', age: 34 },
        { id: 3, name: 'Sam Johnson', age: 21 },
        { id: 4, name: 'Lisa White', age: 25 },
        { id: 5, name: 'Peter Brown', age: 30 }
      ];

      const filteredPeople=people.filter((people)=>people.age>25)
      const reducedPeople=people.reduce((total,curr)=>total+curr.age,0)
      people.forEach((num)=>console.log(num*2))
      const somePeople=people.some((person)=>person.age%2==0)//returns true or false
      const everyPerson=people.every((person)=>person.age%2==0) //returns true of false

      

  return (
    <div>
         <h1>reducedValue:{reducedPeople}</h1>
         <h1>{somePeople?"True":"False"}</h1>
         <h1>{everyPerson?"True":"False"}</h1>
         {filteredPeople.map((val)=>{
          return(
            <div key={val.id}>
               <h1>{val.id}</h1>
               <h1>{val.name}</h1>
               <h1>{val.age}</h1>
            </div>
          )
         })}
          
    </div>
  )
}

export default ArrayMethods
