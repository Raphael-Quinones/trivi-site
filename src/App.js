import React from "react"
import FrontPage from "./FrontPage"
import "./style.css"
import yellowblob from "./img/yellow blob.png"
import blueblob from "./img/blue blob.png"
import Quiz from "./Quiz"

export default function(){
    const [start, setStart] = React.useState(true)
    
    function changeStart(){
        setStart(prevStart => !prevStart)
        

    }
    return (
        <div>
            <img className = "yellowblob"src={yellowblob} />
            <img className = "blueblob"src={blueblob}  />
            <div className = "design1" />
            {start ? 
                <FrontPage change = {changeStart}/> :
                <Quiz />
                }
            
        </div>
    )
}