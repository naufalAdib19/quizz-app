const Results = (props) => {
    return(
        <div>
            <h1 className="font-semibold">Corrected Answer: </h1>
            <p className="mb-3">{props.correct}</p>
            <h1 className="font-semibold">Wronged Answer: </h1>
            <p className="mb-3">{props.wrong}</p>
            <h1 className="font-bold">Score kamu: {props.score}</h1>
        </div>
    )
}

export default Results;