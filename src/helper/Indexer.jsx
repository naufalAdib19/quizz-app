import { parse } from "postcss";
import { createContext , useState } from "react";
import { useEffect } from "react";

const IdxContext = createContext();

const IdxProvider = ({children}) => {
    const [idx, setIdx] = useState(0);
    const [maxQuestion, setMaxQuestion] = useState(0);
    const [lengthTime, setLengthTime] = useState(0);
    
    /* inisialisasi set index */
    useEffect(() => {
        const data = window.localStorage.getItem('INDEXES');
        if( data !== null) setIdx(parseInt(data));
    }, [])

    /* mengubah index pada localStorage sesuai dengan index pada state */
    useEffect(() => {
        window.localStorage.setItem('INDEXES', idx);
        if(window.localStorage.getItem('INDEXES') == maxQuestion) {
            window.localStorage.setItem('INDEXES', 0);
        }
    }, [idx])

    return(
        <IdxContext.Provider
            value={{idx, setIdx, maxQuestion, setMaxQuestion, lengthTime, setLengthTime}}
        >
            {children}
        </IdxContext.Provider>
    )
}

export const Indexer = IdxContext;
export default IdxProvider;

