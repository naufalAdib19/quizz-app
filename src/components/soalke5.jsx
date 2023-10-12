import { Indexer } from "../helper/Indexer";
import { useContext } from "react";

const PausedPage = () => {
    
    const {idx, setIdx} = useContext(Indexer);

    function clickHandler() {
        setIdx(5);
    }

    return(
        <div>
            <button type="button" className="bg-sky-500 px-3 py-2 rounded-md" onClick={clickHandler}>
                Lanjut bang! gg
            </button>
        </div>
    )
}

export default PausedPage;