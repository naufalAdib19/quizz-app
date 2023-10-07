import { useState, useEffect, useContext} from "react";
import { Indexer } from "../helper/Indexer";
import axios from "axios";
import arrayShuffler from "../helper/shufleAnswer";
import Results from "../components/results";
import Loaders from "../components/loaders";

const GetQuestion = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [finalData, setFinalData] = useState([]);
    const [finalAnswers, setFinalAnswers] = useState(null);
    const {idx, setIdx, maxQuestion, setMaxQuestion} = useContext(Indexer);
    const score = (correctAnswer) / (maxQuestion) * 100;   

    //Fetching Data dari API
    useEffect(() => { 
        axios.get('https://opentdb.com/api.php?amount=5')
        .then(res => {
            setData(res.data.results)
            setLoading(false)
            setMaxQuestion(res.data.results.length)                   
        }).catch(err => {
            console.log(err)
        })
    }, []); 

    //Inisialisasi data dan menyimpan data ke dalam local storage
    useEffect(() => {       
        if(window.localStorage.getItem('DATA') == null || JSON.parse(window.localStorage.getItem('DATA')).length == 0) {
            window.localStorage.setItem('DATA', JSON.stringify(data));
        } 
        
        const datas = JSON.parse(window.localStorage.getItem('DATA'));
        if( datas != null && datas.length != 0 ) {
            setFinalData(datas);
            setFinalAnswers(arrayShuffler(datas[idx]?.correct_answer, datas[idx]?.incorrect_answers))
        }
    }, [data, idx]);

    if(loading) {
        return <Loaders/>
    }  

    if(idx > maxQuestion-1) {
        return <Results correct={correctAnswer} wrong={maxQuestion - correctAnswer} score={Math.round(score)}/>
    }

    return(
        <> 
            <div className="question font-semibold text-xl mb-4">
                {idx+1}. {finalData[idx]?.question}
            </div>
            <div className="answer">
                <ul className="flex flex-col gap-y-4">
                    {   
                    finalAnswers?.map((value, index) => {
                            return(
                                <li 
                                className="border border-slate-300 rounded px-2 py-2 hover:bg-slate-50 cursor-pointer" 
                                key={index} 
                                onClick={() => {
                                    setIdx((prev) => prev + 1);
                                    value == finalData[idx]?.correct_answer ? setCorrectAnswer((prev) => prev + 1) : null;
                                }}
                                >
                                    {value}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default GetQuestion;