import { useContext, useEffect, useRef, useState } from "react";
import { Indexer } from "../helper/Indexer";

const CountDown = () => {
    const defaultTime = 30;
    const initialTime = parseInt(localStorage.getItem('COUNTDOWN')) || defaultTime;
    const [countdown, setCountdown] = useState(initialTime);
    const timerId = useRef();
    const {idx, setIdx, lengthTime, setLengthTime} = useContext(Indexer);

    /* Membuat countdown */
    useEffect(() => {
        timerId.current = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)

        return () => clearInterval(timerId.current)
    })

    useEffect(() => {
        if(countdown <= 0) {
           /*  localStorage.setItem('COUNTDOWN', 30) */
            setIdx((prev) => prev + 1)
            setCountdown(initialTime)            
        }
        window.localStorage.setItem('COUNTDOWN', countdown);
        setLengthTime(countdown);
    }, [countdown])

    useEffect(() => {
        if(localStorage.getItem('TEMP_IDX') != idx) {
            setCountdown(defaultTime)
        } 
        localStorage.setItem('TEMP_IDX', idx);
    }, [idx])

    return(
        <>
            {countdown}
        </>
    )
}

export default CountDown;