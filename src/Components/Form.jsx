import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import Info from './Info'

const Form = ({option}) => {

    const [userInput, setUserInput] = useState({

    })

    return(
        <>
            {option !== 'login' ? option === 'info' ? 
            <Info /> 
            : 
            <Signup
                userInput={userInput} 
                setUserInput={setUserInput}/> 
            : 
            <Login 
                userInput={userInput}
                setUserInput={setUserInput}
            />}
        </>
    )
};

export default Form