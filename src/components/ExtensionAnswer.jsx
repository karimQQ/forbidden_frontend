import React from 'react';
import StepikAnswer from "./StepikAnswer";
import GoogleFormsAnswers from "./GoogleFormsAnswers";

const ExtensionAnswer = ({url}) => {
    if (/https:\/\/stepik.org\/*/.test(url)) {
        return (
            <StepikAnswer url={url}/>
        )
    } else if (/https:\/\/docs.google.com\/forms\/d\/e\/*/.test(url) || /https:\/\/forms.gle\/*/.test(url)) {
        return (
            <GoogleFormsAnswers url={url}/>
        )
    }

    return (
        <div>
            <h1>Неправильная ссылка</h1>
        </div>
    );
};

export default ExtensionAnswer;