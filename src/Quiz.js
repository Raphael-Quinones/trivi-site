import React from "react"
import Questions from "./Questions"

export default function(){
    
    const [questions, setQuestions] = React.useState({})
    
    React.useEffect(()=>{
        //sendAPIRequest() executes twice when called
        //So I utilized useEffect to just call it once
        //works haha
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



    function cycleQuestions(list){
        const itemlist = []
        for (let categ in list){
            console.log(list[categ].question)
            itemlist.push(<Questions prompt = {list[categ].question} items ={["as",'asdf']}/>)
        }
        return itemlist
    }
    
    


    const experiment = cycleQuestions(questions)
    console.log(experiment)
    

    return(
        <div className = "quiz">
            {experiment}
        </div>
    )
}