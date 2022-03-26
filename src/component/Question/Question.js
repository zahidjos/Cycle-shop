import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question_part'>
            <div>
                <h3>Question: How reacts work?</h3>
                <p>   Answer: React.js is one of the most JavaScript web frameworks . It’s a library. For building user interfaces. It’s not a full-stack solution that’s going to handle everything from the database to real-time updates over web socket connections. The advantage to having a small API to work with is that you can spend more time familiarizing yourself with it, experimenting with it, and so on.</p>
            </div>
            <div>
                <h3>Question: What is the difference between props and state in React.JS?</h3>
                <p>Answer:
Props: Props is short for properties. It is the set of attributes that are passed from a parent component to a child component. These can be data variables or functions.Props are primarily used to communicate between parent and child components. Moreover, props cannot be altered inside the child component.We pass the keyword props as a parameter to the function to access props in a function-based component.
State: The state is a set of variables that determine the current condition of the component. The state of a component is internal, i.e., defined inside the component and changeable only within the component. Any change in state renders the component again.
In function-based components, the state of a component is defined using the useState hook. State is just a snapshot of the app in a time.

</p>
            </div>
            


        </div>
    );
};

export default Question;