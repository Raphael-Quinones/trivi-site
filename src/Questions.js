import React from "react"

export default function(props){
    const [chosen, setChosen] = React.useState("")

    function choicesDisplay(props, option){
        function buttonClick(){
            setChosen(() => option)
        }
        const additionalStyles = option === chosen ? "chosen--button" : "";
        console.log("test:", option === chosen, additionalStyles)
        console.log("option:", option)
        return (
            <button className = {option === chosen ? "chosen--button" : "choice--item"} value = {option} onClick = {buttonClick}>{option}</button>
        )
    }
    
    const listChoices = props.choices.map(option =>
                                choicesDisplay(props, decodeHtml(option)))

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
            <div className = "choices">
                {listChoices}
            </div>
        </div>
    )
}