import GetQuestion from "../service/getQuestion";
import Results from "../components/results";
import { Indexer } from "../helper/Indexer";
import { useContext, useEffect, useState } from "react";
import CountDown from "../components/countdown";
import LengthCountdown from "../components/countdownLength";

const QuizPage = () => {
    const {idx, maxQuestion} = useContext(Indexer); 

    return(
        <div className="flex items-center justify-center h-screen bg-sky-50">
            <div className="wrapper-content min-w-[90%] md:min-w-[40%] md:max-w-[40%] bg-white rounded-md drop-shadow-md">
               <div className="header px-8 md:flex md:justify-between items-center gap-x-8 py-4">
                    <h1 className="text-xl font-semibold mb-2 px-1 ">Naufal's Quizz App</h1>
                    <div className="flex bg-blue-300 gap-x-3 px-3 py-2 rounded items-center max-w-[140px]">
                        <p className="font-semibold text-blue-800">Time Left</p>
                        <p className="bg-gray-900 px-2 py-1 text-white rounded">
                            {idx > maxQuestion - 1 ? '-' : <CountDown seconds={30}/>}
                        </p>
                    </div>
               </div>
                {
                    idx < maxQuestion ? <LengthCountdown/> : <hr className={`border-b border-black w-[100%]`}/>
                }               
               <div className="body py-5 px-8 flex flex-col items-center">
                <div>
                    <GetQuestion/>       
                </div>       
               </div>
               <hr className="border-b-[1px] border-slate-300 w-full"/>
               <div className="footer px-8 py-4">
                    {
                        idx > maxQuestion - 1 ? "Results" : `${idx + 1} of ${maxQuestion} Questions`
                    }
               </div>
            </div>
        </div>
    )
}

export default QuizPage;