import React from "react"

export default function(props){
    function choicesDisplay(option){
        return (
            <button value = {option}>{option}</button>
        )
    }
    
    const listChoices = props.choices.map(option =>
                                choicesDisplay(decodeHtml(option)))

    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

                                
    return(
        <div className = "question">
            <h3 className = "question--prompt">
                {decodeHtml(props.question)}
            </h3>
            {listChoices}
        </div>
    )
}