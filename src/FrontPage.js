import React from "react"


export default function(props){
    return(
        <div className = "frontPage">
            <h2 className = "frontPage--title">
                Quizzical
            </h2>
            <p className = "frontPage--subtitle">
                Some Description if Needed
            </p>
            <button className = "frontPage--button" onClick = {props.change}>
                Start Now
            </button>
        </div>
    )
}