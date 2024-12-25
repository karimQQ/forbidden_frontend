import React from 'react';
import classes from './MyTextArea.module.css'
import MyCopyButton from "../CopyButton/MyCopyButton";

const MyTextArea = ({children}) => {
    return (
        <div className={classes.textarea}>
            <div className={classes.text}>
                {children}
            </div>
            <MyCopyButton value={children}/>
        </div>
    );
};

export default MyTextArea;