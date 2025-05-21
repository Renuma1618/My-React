import React from 'react'
import Products from './Products';


function Middle(){
    return(
        <div>
            {
                Products.map((item)=>{
                    return(
                        <div>
                        <h1> {item.id}</h1>
                         <h1> {item.name}</h1>
                         <h1> {item.category}</h1>
                         </div>
                    )
                })
            }
        </div>
    )
}
export default Middle;