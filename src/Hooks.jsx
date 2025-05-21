// import React, { useState } from 'react'

// function Hooks(){
//     const [color, setcolor] = useState("red")
    


//     return(
//         <div> 
//             <h1>i am {color}</h1>
//         <button onClick={()=>{setcolor("blue")}}>change</button>
//         </div>
        
//     )
// }

// export default Hooks;

// import React, { useState } from 'react'

// function Hooks(){
//     var[count, setcount] = useState(0)
//     function changes(){
//         setcount(count+1)
//     }

//     function change(){
//         setcount(count-1)
//     }
//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={changes}>increment</button>
//              <button onClick={change}>decremenyt</button>
//         </div>
//     )
// }
// export default Hooks


// import React, { useState } from 'react'

// function Hooks(){
//     var[count, setcount] = useState(0)
    
//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=>setcount(count+1)}>increment</button>
//             <button onClick={()=>setcount(count-1)}>decerement</button>
//         </div>
//     )
// }
// export default Hooks


// import React, { useEffect, useState } from 'react'

// function Hooks(){
//     var [data,setdata]=useState([])
//     console.log(data)
//     function datachange(){
//         fetch('https://fakestoreapi.com/products')
//             .then(response => response.json())
//             .then(data => setdata(data));
//     }
//    useEffect(()=>{
//     datachange()
    
//    },[])
//     return(
//         <div>
//             {
//                 data.map((item)=>{
//                     return(
//                         <div>
//                             <h1> {item.id}</h1>
//                              </div>
//                     )
//                 })
//             }
//             <button onClick={datachange}>click to get reuslt</button>
//         </div>
//     )
// }
// export default Hooks;



// import React, { useState } from 'react'

// function Hooks(){
//     const[color, setcolor] = useState("red")
//     function data(){
//         setcolor("orange")
//     }
//     return(
//         <div>
//             <h1> the color is {color}</h1>
//             <button onClick={data}>click to chnage</button>
//         </div>
//     )
// }
// export default Hooks;


// import React, { useState } from 'react'

// function Hooks(){
//     const[count,setcount] =useState(0)

//     function countchange(){
//         setcount(count+1)
//     }
//         return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={countchange}>increment</button>
//             <button onClick={()=>setcount(count-1)}>decrement</button>
//         </div>
//     )
// }
// export default Hooks;




import React, { useState } from 'react'

function Hooks(){
    var [bgcolor, setbgcolor] =useState("ornge")
    console.log(bgcolor)
    

    return(
        <div>
            <h1>the bagclor with {bgcolor}</h1>
            <button onClick={()=>{(bgcolor==("blue"))?setbgcolor("red"):setbgcolor("yellow")}}>click to change</button>
        </div>
    )
}
export default Hooks;