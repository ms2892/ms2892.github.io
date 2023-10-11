import React from 'react';
import PropTypes from 'prop-types';
import skills from './skills.json';
import './src/css/skills.css';
import SkillItem from './skillItem/skillItem';

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const obj={};

        const skillArray = skills.skills;

        console.log(skillArray)
        let i=0;
        for(let i=0;i<skillArray.length;i++){
            if (obj[skillArray[i].group]===undefined){
                obj[skillArray[i].group]=[];
            }
            obj[skillArray[i].group].push(skillArray[i].skillName);
        }


        console.log(obj);
        
        var skillList = Object.keys(obj).map((key) => {
            return <SkillItem skillGroup={key} skillList={obj[key]}></SkillItem>
        })    

        return (
            <div>
                <h1 className='section-title'>Skills</h1>

                <div className='skills-container'>
                    {
                        skillList
                    }
                </div>
            </div>
        );
    }
}

Skills.propTypes = {};

export default Skills;
