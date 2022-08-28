import React from "react"
import { nanoid } from "nanoid";

import Questions from "./Questions"

export default function(){
    
    const [questions, setQuestions] = React.useState({})
    const [playing, setPlaying] = React.useState(true)
    const [items, setItems] = React.useState([])
    
    React.useEffect(()=>{
        //sendAPIRequest() executes twice when called
        //So I utilized useEffect to just call it once
        //works haha
        //await only works inside async functions
        async function sendAPIRequest(){
            //helper
            function shuffleChoices(correct, incorrect){
                //merges the two arrays
                const choicesArray = [correct, ...incorrect]
                //shuffles choices
                choicesArray.sort((a, b) => 0.5 - Math.random());
                return choicesArray
            }
            function processData(exp){
                const itemlist = []
                for (let categ in exp){
                    const item = exp[categ]
                    itemlist.push({
                        id: nanoid(),
                        question: item.question,
                        correctAnswer: item.correct_answer,
                        choices: shuffleChoices(item.correct_answer, item.incorrect_answers)
                    })
                }
                return itemlist
            }


            const response = await fetch('https://opentdb.com/api.php?amount=3',
            { mode: "cors" });
            const trivias = await response.json()

            const exp = trivias.results
            console.log(exp)
            //I still don't know exactly why, but storing the array using hooks works
            //maybe because after the whole page refreshes, questions variables are now semi-permanently changed

            
            setItems(() => processData(exp))
        }

        sendAPIRequest()


        
    
        
        
;        
    },[])

    //function to be used inside Questions.js
    function changePlaying(){
        setPlaying(prevPlay => !prevPlay)
    }

    function callPlay(){
        return playing
    }
    

    
    



    const itemsToTag = items.map(item => (
        <Questions 
            key = {item.id}
            question = {item.question}
            correctAnswer = {item.correctAnswer}
            choices = {item.choices}

            changePlaying = {changePlaying}
            callPlay = {callPlay}
        />
    ))
    

    return(
        <div className = "quiz">
            {itemsToTag}
        <button className = "check-answers" onClick = {changePlaying}>
            {callPlay() ? "Check Answers" : "Play Again"}
        </button>
        </div>
        
    )
}