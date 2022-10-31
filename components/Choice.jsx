import React from "react";

export default function Choice(props){

    function changeColor(ended, selected, correct) {
        if (ended) {
            if (selected && !correct) {
                return '#F8BCBC';
            } else if (correct ) {
                return '#94D7A2';
            } else {
                return '#F5F7FB'
            }
        } else {
            if (selected) {
                return '#D6DBF5'
            } else {
                return ''
            }
        }
    }

    return (
        <div>
                <li 
                   onClick={(() => props.handleClick(props.qs, props.id))}
                className="cursor-pointer text-primary border-2 border-primary  py-1.5 px-4 rounded-full"
                style={{ backgroundColor: changeColor(props.end,props.select, props.correct)}}
                >
                {props.value}
                </li>
        </div>
    )
}