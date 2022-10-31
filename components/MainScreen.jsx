import React from "react";

export default function MainScreen(props){

    return (
        <main>
             <div className=" bg-main h-screen flex flex-col items-center justify-center gap-6 ">

                <h1 className="text-primary text-center text-4xl sm:text-5xl md:text-6xl font-karla font-bold ">
                Quizzical</h1>

                <p 
                className="text-primary font-inter text-lg sm:text-xl w-96 text-center">
                Do you love challenges? play this quiz game and have fun at the same time!!</p>

                <button 
                className="text-white bg-btn py-2 px-8 sm:py-4 sm:px-12 rounded hover:bg-blue-600" 
                onClick={props.handleClick}>Start quiz</button>

             </div>
             
             <img src="./illustration.png" alt="illustration"  className="absolute bottom-0"/>
             <img src="./illustration-2.png" alt="illustration-2" className="absolute top-0 right-0"/>
        </main>
    )
}