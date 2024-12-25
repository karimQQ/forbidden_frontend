import React, {useState} from 'react';
import MyButton from "../Button/MyButton";
import classes from "./MyCopyButton.module.css";

const MyCopyButton = ({value}) => {
    const [animationRunning, setAnimationRunning] = useState(false)

    const copyValue = () => {
        navigator.clipboard.writeText(value).then(() => {
            setAnimationRunning(true)
            setTimeout(() => setAnimationRunning(false), 600)
        }, function (err) {
            console.error('Произошла ошибка при копировании текста: ', err);
        });
    }

    if (animationRunning) {
        return (
            <MyButton className={classes.copyButton}>✔</MyButton>
        )
    } else {
        return (
            <MyButton onClick={copyValue} className={classes.copyButton}>Copy</MyButton>
        )
    }
};

export default MyCopyButton;