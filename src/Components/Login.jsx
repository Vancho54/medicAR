import React from 'react';

const Login = ({setUserInput, userInput}) => {

    const handleChange = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        })
    }

    return(
    <div className='form'>
        <div className='card'>
            <form className='form-inputs'>
                <input 
                    type='text'
                    name='dni'
                    placeholder='DNI' 
                    onChange={handleChange}    
                />
                <input
                    type='password'
                    name='password'
                    onChange={handleChange} 
                    placeholder='Contraseña'/>
                <select>
                    <option>---Obra Social---</option>
                </select>
                <button className='btn'>Ingresar</button>
            </form>
        </div>
    </div>
    )
};

export default Login