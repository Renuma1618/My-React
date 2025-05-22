import React, { useEffect, useRef, useState } from 'react'

function Useref(){
    var[value,setvalue]= useState(0)
    var count = useRef(0)

    useEffect(()=>{
        count.current = count.current+1
        console.log(count.current)
    })
    return(
        <div>
            <button onClick={()=>{setvalue(value+1)}}>+</button>
            <h1>{value}</h1>
            <button onClick={()=>{setvalue(value-1)}} >-</button>
            <h1>rendered times   {count.current}</h1>
        </div>
    )
}
export default Useref