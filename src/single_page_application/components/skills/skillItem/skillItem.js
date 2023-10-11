import React from "react";
import { ReactDOM } from "react";
import './src/css/skillItem.css'

function SkillItem(props) {
    const skillListSpliced = props.skillList.slice(1, props.skillList.length);
    console.log(skillListSpliced)
    let classChosen='';
    if(props.skillGroup === 'Cloud Technologies') {
        classChosen='fa fa-mixcloud'
    }else if(props.skillGroup === 'Web Development') {
        classChosen='fa fa-laptop'
    }else if(props.skillGroup === 'Machine Learning'){
        classChosen='fa fa-keyboard-o'
    }else{
        classChosen='fa fa-code'
    }

    return (
        <div className='skill-group'>
            <h2><i className={classChosen} aria-hidden="true"></i></h2>
            <h2 className='skill-group-title'>{props.skillGroup}</h2>
            <p className='skill-description'>
                {props.skillList[0]}
                {skillListSpliced.map((item) => (
                    <span>, {item}</span>
                ))}
            </p>
        </div>
    );
}


export default SkillItem;
