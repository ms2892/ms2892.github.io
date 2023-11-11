import React from 'react';
import ExperienceItem from './components/experienceItem';
import './src/css/experience.css'
import experience from './experience.json';

class Experience extends React.Component {

    render() {
        return (
            <div className='section'>
                <h1 className='section-title'>Experience</h1>
                <div className='timeline-container'>
                    <ul className='timeline'>
                        {experience.experienceData.map(item=>(
                            <ExperienceItem dates={item.date} role={item.role} jobCompany={item.company} description={item.description} companyDesc={item.company_expand} roleDesc={item.role_expand} impact={item.impact}></ExperienceItem>
                            )
                        )}  
                    </ul>
                </div>
            </div>
        );
    }
}


export default Experience;
