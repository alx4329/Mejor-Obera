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
            <div className="qandA-title">Más sobre cómo participar en el MejorOberá</div>
            {
                questionsAndAnswers.map((q,index)=>
                {
                    return <>
                        <div className="q-container" >
                            <div className="question-box" onClick={()=>toggleShow(index)} >
                                <div className="question-title" >
                                    {q.question}
                                </div>
                                <span class="material-symbols-outlined qandA-arrow">{!showQuestions[index] ? "expand_more":"expand_less"}</span>
                            </div>
                            <div className={showQuestions[index]?"answer show":"answer"} dangerouslySetInnerHTML={{__html: q.answer}} ></div>
                        </div>
                    </>
                })
            }
        </div>
    )
}

export default QandA