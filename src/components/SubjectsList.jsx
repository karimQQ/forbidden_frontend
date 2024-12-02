import React from 'react';
import {Link} from "react-router-dom";

const SubjectsList = ({subjects, intersects, classNumber}) => {
    return (
        <div>
            {subjects.filter(e => {
                    if (intersects[e.id]) {
                        return intersects[e.id][classNumber]
                    } else {
                        return false
                    }
                }
            ).map((e) => <p key={e.id}><Link to={intersects[e.id][classNumber]["url"]}>{e.title}</Link></p>)}
        </div>
    );
};

export default SubjectsList;