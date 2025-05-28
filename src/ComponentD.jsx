import { useContext } from 'react'
import {  Usercontext } from './ComponentA.jsx'

function ComponentD(){
    const user = useContext(Usercontext)
    return(
        <div className="style">
            <h1>ComponentD</h1>
            
            <h2>{`bye ${user}`}</h2>
            
        </div>
        
    )
}
export default ComponentD