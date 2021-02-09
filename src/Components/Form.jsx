import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Info from './Info'

const Form = ({option}) => {
    return(
        <>
            {option !== 'login' ? option === 'info' ? <Info /> : <Signup /> : <Login />}
        </>
    )
};

export default Form