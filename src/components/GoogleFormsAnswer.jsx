import React from 'react';
import MyTextArea from "./UI/TextArea/MyTextArea";
import ChoosingManyField from "./UI/ChoosingManyField/ChoosingManyField";
import ChoosingOneField from "./UI/ChoosingOneField/ChoosingOneField";

const GoogleFormsAnswer = ({fieldData, answer}) => {
    if (answer) {
        return (
            <div>
                {fieldData['type'] === 0 ?
                    <MyTextArea>{answer['answer']['text']}</MyTextArea>
                    :
                    fieldData['type'] === 2 ?
                        <ChoosingOneField chose={answer['answer']['one_list']} answers={fieldData['data']}/>
                        :
                        fieldData['type'] === 3 ?
                            <MyTextArea>{answer['answer']['dropdown_list']}</MyTextArea>
                            :
                            <ChoosingManyField chose={answer['answer']['many_list']} answers={fieldData['data']}/>
                }
            </div>
        )
    }
    return (
        <div>

        </div>
    );
};

export default GoogleFormsAnswer;