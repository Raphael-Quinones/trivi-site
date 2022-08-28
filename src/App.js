import React from "react"
import FrontPage from "./FrontPage"
import "./style.css"
import Quiz from "./Quiz"

export default function(){
    const [start, setStart] = React.useState(true)
    
    function changeStart(){
        setStart(prevStart => !prevStart)
        

    }
    return (
        <div>
            <div className = "design1" />
            {start ? 
                <FrontPage change = {changeStart}/> :
                <Quiz />
                }
            
        </div>
    )
}