import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import Loader from "./UI/Loader/Loader";

const BookAnswer = ({task_url}) => {
    const [answer, setAnswer] = useState({})

    const [fetchAnswer, isAnswerLoading, answerError] = useFetching(async () => {
        const result = await (await fetch("https://forbiddengdz.ru/gdz/json" + task_url)).json()
        console.log(result)
        setAnswer(result["editions"])
    })

    useEffect(() => {
        fetchAnswer()
    }, [task_url]);

    return (
        <div>
            {answerError ?
                <h1>{answerError}</h1>
                :
                isAnswerLoading ?
                    <Loader/>
                    :
                    <div className="images">
                        {answer[0]["images"].map(e => <img className="image"
                                                           src={"https://forbiddengdz.ru/gdz" + e["url"]}
                                                           alt="answer"/>)}
                    </div>
            }
        </div>
    );
};

export default BookAnswer;