import React from "react"
import Questions from "./Questions"

export default function(){
    
    const [questions, setQuestions] = React.useState({})
    
    
    

    
    //sendAPIRequest() executes twice when called
    //So I utilized useEffect to just call it once
    //works haha
    React.useEffect(()=>{
        //await only works inside async functions
        async function sendAPIRequest(){
            const response = await fetch('https://opentdb.com/api.php?amount=10',
            { mode: "cors" });
            const trivias = await response.json()

            setQuestions(trivias.results)
            //I still don't know exactly why, but storing the array using hooks works
            //maybe because after the whole page refreshes, questions variables are now semi-permanently changed
        }
        sendAPIRequest()
;        
    },[])
    
    for (let categ in questions){
        console.log(questions[categ].question)
    }
    
    

    return(
        <div className = "quiz">
            <Questions prompt = {'as'} items ={["as",'asdf']}/>
        </div>
    )
}