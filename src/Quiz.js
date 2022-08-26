import React from "react"
import Questions from "./Questions"

export default function(){
    
    const [questions, setQuestions] = React.useState({})
    
    //await only works inside async functions
    async function sendAPIRequest(){
        const response = await fetch('https://opentdb.com/api.php?amount=10',
        { mode: "cors" });
        const trivias = await response.json()
        return trivias.results
    }
    

    
    //sendAPIRequest() executes twice when called
    //So I utilized useEffect to just call it once
    //works haha
    React.useEffect(async ()=>{
        const triviaArray = await sendAPIRequest()//this function is async, we need await to get results
        //therefore anonymous function should also be async
        setQuestions(triviaArray)
        //I still don't know exactly why, but storing the array using hooks works
        //maybe because after the whole page refreshes, questions variables are now semi-permanently changed
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