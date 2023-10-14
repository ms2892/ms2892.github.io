import React from 'react';
import thoughts from './thoughts.json'
import './src/css/thought.css'


const Thought = () => {
    const thought = thoughts['quotes'][Math.floor(Math.random() * thoughts['quotes'].length)];
    let thoughtMessage = thought['quote'];
    let thoughtAuthor = thought['author']


    return (
        <div className='thought-container'>
            <p className='thought-message'><span>"</span>{thoughtMessage}<span>"</span></p>
            <p className='thought-author'><i>- {thoughtAuthor}</i></p>
        </div>
    );
};

export default Thought;
