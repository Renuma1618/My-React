import { useState, createContext} from "react"
import ComponentB from "./ComponentB.jsx"

export const Usercontext = createContext();

function ComponentA(){

    const [user,setuser] = useState("Renuka")
    return(
        <div className="style">
       
        <h2>ComponentA</h2>
        <h3>{`Hello ${user}`}</h3>
        <Usercontext.Provider value={user}>
            <ComponentB user={user}/>

        </Usercontext.Provider>
        
        </div>
    )
}
export default ComponentA