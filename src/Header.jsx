import React from 'react'
import Footer from './Footer';
import Middle from './Middle';

function Header(){
    var message= "i love javascript"
    var name ="renuka"

    return(
        <div>
            
            <Footer data ={message} name ={name} />
            <Middle data={message}/>

        </div>
    )
}
export default Header;

