import React from "react"

export default function(props){
    const [chosen, setChosen] = React.useState("")

    //calls playing useState to be used in useEffect
    const playing = props.callPlay()
    React.useEffect(()=>{
        //checkanswers
        const temp = !props.callPlay() ? props.checkAnswers(chosen, props.correctAnswer) : {}
    },[playing])

    function choicesDisplay(props, option){
        function buttonClick(){
            setChosen(() => option)
        }

        return (
            <button className = {option === chosen ?
                    (!playing ? (chosen === props.correctAnswer ?  "choice--correct" : "choice--wrong"): 
                        "chosen--button"):
                    "choice--item"} 
                    value = {option} 
                    onClick = {buttonClick}>{decodeHtml(option)}</button>
        )
    }
    
    const listChoices = props.choices.map(option =>
                                choicesDisplay(props, option))

    
    

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
            <hr className = "item--division"/>
        </div>
    )
}