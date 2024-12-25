import React from 'react';
import classes from './ChoosingManyField.module.css'

const ChoosingManyField = ({answers, chose}) => {
    return (
        <div className={classes.field}>
            {answers.map(answer => <div className={classes.answer}>
                {chose.indexOf(answer) !== -1 ?
                    <div className={classes.active}/>
                    :
                    <div className={classes.inactive}/>
                }
                {answer}
            </div>)}
        </div>
    );
};

export default ChoosingManyField;