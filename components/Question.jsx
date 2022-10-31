import React from "react";
import Choice from "./Choice";

export default function Question(props){

    let choices = props.item.answer.map((e,index) => (
    <Choice 
    key={index} 
    id={e.id} 
    value={e.choice} 
    handleClick={props.handleClick} 
    qs={props.item.id} 
    select = {e.isSelected} 
    correct={e.isCorrect} 
    end={props.end}  
    />))
    
    let questions = props.item.qs;

    return (
           <div className="flex flex-col my-0 sm:mx-auto sm:w-3/6 p-4">
                <div>
                    <h1 className="text-xl text-primary font-karla font-bold max-w-xl">{questions}</h1>
                    <ul className="flex gap-3 my-1">
                    {choices}
                    </ul>
                    <hr className="border-2 border-border my-3" />
                </div>
            </div>
    )
}