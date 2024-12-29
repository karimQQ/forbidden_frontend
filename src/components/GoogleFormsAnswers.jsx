import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import API from "../API";
import Loader from "./UI/Loader/Loader";
import GoogleFormsAnswer from "./GoogleFormsAnswer";

const GoogleFormsAnswers = ({url}) => {
    const [answers, setAnswers] = useState([])
    const [form, setForm] = useState([])

    const [fetchAnswers, isAnswersLoading, answersError] = useFetching(async () => {
        const form_id = await API.getFormIdByUrl(url)
        const result = await API.getGoogleFormsAnswers(form_id)
        console.log(result)
        setAnswers(result)
    })

    const [fetchFrom, isFormLoading, formError] = useFetching(async () => {
        const result = await API.getForm(url)
        console.log(result)
        setForm(result)
    })

    useEffect(() => {
        fetchAnswers()
        fetchFrom()
    }, [url]);

    return (
        <div>
            {
                answersError ?
                    <h1>{answersError}</h1>
                    :
                    formError ?
                        <h1>{formError}</h1>
                        :
                        isAnswersLoading || isFormLoading ?
                            <Loader/>
                            :
                            <div>
                                {answers.length === 0 ?
                                    <div>
                                        <h1>Нет ответов</h1>
                                    </div>
                                    :
                                    <div>
                                        {form.map(field => <GoogleFormsAnswer fieldData={field}
                                                                              answer={answers.reduce((value, e) => {
                                                                                  if (e['field_id'] === field['field_id']) {
                                                                                      return e
                                                                                  } else {
                                                                                      return value
                                                                                  }
                                                                              }, undefined)} key={field['field_id']}/>)}
                                    </div>
                                }
                            </div>
            }
        </div>
    );
};

export default GoogleFormsAnswers;