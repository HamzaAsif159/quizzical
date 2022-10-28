import React from "react";

export default function Mcqs(){
    return (
        <div className="bg-main h-screen">
           <div>
                <h1 className="text-xl text-primary font-karla font-bold">How would one say goodbye in Spanish?</h1>
                <ul className="flex gap-3">
                    <li>Adios</li>
                    <li>Adios</li>
                    <li>Adios</li>
                    <li>Adios</li>
                </ul>
           </div>

            <img src="./illustration.png" alt=""  className="absolute bottom-0"/>
            <img src="./illustration-2.png" alt="" className="absolute top-0 right-0"/>
        </div>
    )
}