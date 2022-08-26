import React from "react"

export default function(props){
    function choicesDisplay(option){
        return (
            <button value = {option}>{option}</button>
        )
    }
    
    const listChoices = props.choices.map(option =>
                                choicesDisplay(option))
    
                                
    return(
        <div className = "question">
            <h3 className = "question--prompt">
                {props.prompt}
            </h3>
            {listChoices}
        </div>
    )
}