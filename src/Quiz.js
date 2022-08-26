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
            const item = list[categ]
            console.log(item.question)
            itemlist.push(<Questions prompt = {item.question} items ={item.incorrect_answers}/>)
        }
        return itemlist
    }
    
    


    const items = cycleQuestions(questions)
    

    return(
        <div className = "quiz">
            {items}
        </div>
    )
}