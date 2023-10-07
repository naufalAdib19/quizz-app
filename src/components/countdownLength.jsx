import { useContext, useEffect, useRef } from "react";
import { Indexer } from "../helper/Indexer";
import CountDown from "./countdown";
import { document } from "postcss";

const LengthCountdown = () => {
    const hr = useRef('');
    const { lengthTime } = useContext(Indexer);

    useEffect(()=> {
        hr.current.style.width = `${3.333 * lengthTime}%`;
        
        if(lengthTime <= 30) {
            hr.current.style.borderColor = "rgb(34 197 94)"
        } 
        if(lengthTime <= 20) {
            hr.current.style.borderColor = "rgb(234 179 8)"
        }
        if(lengthTime <= 10) {
            hr.current.style.borderColor = "rgb(239 68 68)"
        }

    }, [lengthTime])

    return(
        <>
            <hr ref={hr} className={`loader-time border-b border-green-500 mt-2 transition-width transition-borderColor duration-75`}/>
        </>
    )
}

export default LengthCountdown;