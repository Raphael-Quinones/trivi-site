import React from "react"

export default function(props){
    function choices(choice){
        return (
            <button value = {choice}>{choice}</button>
        )
    }
    
    const listChoices = props.items.map(choice =>
                                choices(choice))
    
                                
    return(
        <div className = "question">
            <h3 className = "question--prompt">
                {props.prompt}
            </h3>
            {listChoices}
        </div>
    )
}