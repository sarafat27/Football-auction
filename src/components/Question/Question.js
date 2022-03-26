import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='questions'>
            <h1>(1) How React works?</h1>
            <p>ans: React is a component based library of javascript.It runs its code unidirectionaly.At first react creates a virtual dom which is a copy of original dom.When anything is updated ,react compares the previous copy of virtual dom with the updated one.This is called reconciliation.Then react updated the changes in the original dom.This process is called diffing.</p>
            <h1>(2) How useState works?</h1>
            <p>ans: UseState is a hook which is used to do any changes in the ui.It works asynchronusly.It returns an array where there are two elements.Here,first element is the initial value which we should set earlier.Then ,the next element is a function which is used to update the initial value.</p>
        </div>
    );
};

export default Question;