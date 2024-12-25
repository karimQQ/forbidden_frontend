import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

const Finder = ({placeholder, callback}) => {
    const [text, setText] = useState('')

    return (
        <div className="finder">
            <MyInput type="text" placeholder={placeholder} value={text} onChange={e => setText(e.target.value)}/>
            <MyButton onClick={() => {
                callback(text)
                setText('')
            }}>Найти</MyButton>
        </div>
    );
};

export default Finder;