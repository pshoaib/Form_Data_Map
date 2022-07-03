import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { MapData } from './MapData';



let initData ={
    name:"",
    email:"",
    age:"",
    pass:"",
    married:""
}
let array= JSON.parse(localStorage.getItem("SaveData"))||[];
export const Form = () => {
   const [ formData , setData] = useState(initData)
   let count=1;

    const handleChange=(e)=>
    {
        let {value , name , type , checked} = e.target;
        // console.log(type+"  dhbhdbhdb ") false ===> tyep = text  for true====> checkbox
        // console.log(checked+"  bbbbb")
       
        let updatedValue = type === "checkbox" ? checked : value        
        setData({
                ...formData ,
                [name]:updatedValue
            })
    }
      console.log(formData)
   const handleSubmit =(e)=>
   {
      e.preventDefault()
      formData.value="";
     array.push(formData)
     localStorage.setItem("SaveData",JSON.stringify(array))
      
    //   console.log(formData)
    //   console.log(array)
   }
//    useEffect(()=>
//    {

//    },[formData , array])

   console.log(array)
  return (
    <div>
        <h1> Forms </h1>
        <form>
        <div style={{display:'grid', width:'220px', margin:"auto" , border:'1px solid tomato', marginTop:'50px'}}>
           
        

                 <input style={{height:'27px',margin:'10px'}}
                        placeholder='Enter Name'
                        onChange={handleChange}
                        name="name"
                        value={formData.name}
                      
                      />
                    <input style={{height:'27px',margin:'10px'}} 
                        placeholder='Enter Email' 
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                       />
                    <input style={{height:'27px',margin:'10px'}}
                        placeholder='Enter Age'
                        onChange={handleChange}
                        name="age"
                        value={formData.age}
                       />
                    <input style={{height:'27px',margin:'10px'}} 
                        placeholder='Enter Password'
                        onChange={handleChange}
                        name="pass"
                        value={formData.pass}
                        />
                  <div>
                    <input type="checkbox"
                           onChange={handleChange}
                           name="married"
                           
                     />
                    <label>Married</label>
                    </div>
                        <input type="submit" onClick={handleSubmit} />
       
        </div>
   
        </form>
        <div>
            {/* <h3>Name :  {formData.name} </h3>
            <h4>Email : {formData.email} </h4>
            <h4>Age  :  {formData.age} </h4>
            <h4>Pass :  {formData.pass} </h4>
            <h4>Status: {formData.checked} </h4> */}
        

         
        </div>
      {
        array.map((elem)=>
        (
            <div style={{display:'grid', gridTemplateColumns:'repeat(6,1fr)', width:'56%', margin:'auto', border:'1px solid black', marginTop:'20px', gap:'20px'}} key={elem.id}>
              <h3>{count++}</h3>
               <h3>{elem.name}</h3>
               <h2>{elem.email}</h2>
               <h2>{elem.age}</h2>
               <h2>{elem.pass}</h2>
               <button >Delete</button>
               
                </div>
        ))
      }
          

      
    </div>
  )
}
