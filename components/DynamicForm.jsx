import React from 'react'
import { Data } from '../Data/Data' 

const objToArray = Object.keys(Data)

// console.log(Data[objToArray[0]]) 

const arr = (obj)=>{
    return Object.keys(obj).map(key  => ({name : key, ...obj[key]})) // rerun array ob object 
    // return Object.keys(obj).map(key  => ({...obj[key]}))  return array of obejet without name
   // console.log( obj[arr[0]])  array return using key 
}

 console.log(arr(Data));
function DynamicForm() {

  return (
    <div>
    
    </div>
  )
}

export default DynamicForm