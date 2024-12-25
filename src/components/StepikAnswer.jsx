import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import API from "../API";
import Loader from "./UI/Loader/Loader";

const StepikAnswer = ({url}) => {
    // const [answer, setAnswer] = useState([])
    //
    // const [fetchAnswers, isAnswersLoading, answersError] = useFetching(async () => {
    //     const step_id = await API.getStepikStepIdByUrl(url)
    //     const result = await API.getStepikAnswers(step_id)
    //     console.log(result)
    //     setAnswer(result)
    // })
    //
    // useEffect(() => {
    //     fetchAnswers()
    // }, [url]);

    return (
        <div>
            <h3>Stepik пока не работает</h3>
        </div>
    );
};

export default StepikAnswer;