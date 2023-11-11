import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../src/css/modal.css'
import { useNavigate } from 'react-router-dom';


function ExperienceItem(props){

    const [display, setDisplay] = useState('none');
    const [opacityValue, setOpacityValue] = useState(0);
    const [cursorstate,setCursorstate] = useState('pointer');
    const history = useNavigate();


    return (
        <li className='timeline-item' onClick={() => {
            if(window.innerWidth>1200){
                if(display=='none'){
                    setDisplay('flex')
                    setCursorstate('auto')
                    setOpacityValue(1)
                }else{
                    setDisplay('none')
                    setCursorstate('pointer')
                    setOpacityValue(0)
                }
            }else{
                history('/experienceDisplay',{state:{
                    role: props.role,
                    company:props.jobCompany,
                    companyDesc: props.companyDesc,
                    roleDesc:props.roleDesc,
                    impact:props.impact
                }})
            }
        }} style={{cursor:cursorstate}}>
            <div className='timeline-info'>
                {props.dates}
            </div>
            <div className='timeline-box'>
                <h3>{props.role}</h3>
                <h4>{props.jobCompany}</h4>
                <p dangerouslySetInnerHTML={{__html:props.description}}></p>
            </div>
            <div className='modal-container-show' style={{display:display, opacity:`${opacityValue}`}}>
                <div className='modal-container'>
                    <div className='modal-close-button' onClick={() => {
                        if(window.innerWidth>1200){
                            if(display=='none'){
                                setDisplay('block')
                            }else{
                                setDisplay('none')
                            }
                        }else{

                        }
                    }}>
                        X
                    </div>    
                    <div className="modal-box">
                        <h1 className="modal-company">{props.jobCompany}</h1>
                        <p className="modal-company-desc">{props.companyDesc}</p>
                        <h1 className="modal-role">As a {props.role}</h1>
                        <p className="modal-role-desc">{props.roleDesc}</p>
                        <h1 className="modal-achievements">Impact</h1>
                        <ul>
                            {
                                props.impact.map(item=>(
                                    <li className="modal-achievements-list" dangerouslySetInnerHTML={{__html:item}}></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ExperienceItem;