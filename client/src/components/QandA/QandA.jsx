import React from "react";
import { questionsAndAnswers } from "../../assets/questionsAndAnswers";
import './QandA.css'
const QandA = () =>{
    const [showQuestions, setShowQuestions] = React.useState(new Array(questionsAndAnswers.length).fill(false))
    const toggleShow = (i) =>{
        let items = [...showQuestions]
        items[i] = !items[i]
        setShowQuestions(items)
        console.log(showQuestions)
    }

    return(
        <div className="qandA-container" >
            <div className="qandA-title">Enterate más</div>
            <div className="qandA-subtitle" >TODO LO QUE TENES QUE SABER SOBRE MEJOR OBERÁ</div>
            {
                questionsAndAnswers.map((q,index)=>
                {
                    return <>
                        <div className="q-container" >
                            <div className="question-box" onClick={()=>toggleShow(index)} >
                                <div>
                                    {q.question}
                                </div>
                                <span class="material-symbols-outlined">{!showQuestions[index] ? "expand_more":"expand_less"}</span>
                            </div>
                            <div className={showQuestions[index]?"answer show":"answer"} >{q.answer}</div>
                        </div>
                    </>
                })
            }
        </div>
    )
}

export default QandA