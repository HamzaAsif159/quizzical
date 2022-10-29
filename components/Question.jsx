import React from "react";

export default function Question(props){

    let questions = props.item.qs;
    return (
           <div className="flex flex-col my-0 mx-auto w-3/6 p-4">
                <div>
                    <h1 className="text-xl text-primary font-karla font-bold max-w-xl">{questions}</h1>
                    <hr className="border-2 border-border my-3" />
                </div>
        </div>
    )
}