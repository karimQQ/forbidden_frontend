import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import SubjectsList from "../components/SubjectsList";

const ClassNumber = () => {
    const {number} = useParams()
    const [data, setData] = useState({})

    const [fetchSubject, isSubjectsLoading, subjectsError] = useFetching(async () => {
        const result = await (await fetch(`https://forbiddengdz.ru/gdz/json/${number}`)).json()
        console.log(result)
        setData(result)
    })

    useEffect(() => {
        fetchSubject()
    }, [number]);

    const getNumber = () => {
        return number.substring(0, number.indexOf('-'))
    }

    return (
        <div>
            {subjectsError ?
                <h1>{subjectsError}</h1>
                :
                isSubjectsLoading ?
                    <Loader/>
                    :
                    <div>
                        <SubjectsList subjects={Object.values(data["subjects"]["1"])}
                                      intersects={data["intersects"]["1"]} classNumber={getNumber()}/>
                    </div>
            }
        </div>
    );
};

export default ClassNumber;