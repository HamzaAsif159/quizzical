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
           <div className="sm:flex sm:flex-col my-0 sm:mx-auto sm:w-3/6 p-2 sm:p-4 ">
                    <p className="sm:text-xl text-primary font-karla font-bold">{questions}</p>
                    <ul className="flex flex-wrap gap-3 my-1 ">
                    {choices}
                    </ul>
                    <hr className="border-2 border-border my-3 w-full" />
            </div>
    )
}