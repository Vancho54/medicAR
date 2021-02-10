import React from 'react';

const Signup = ({userInput, setUserInput}) => {

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
                    placeholder='E-mail' 
                    name='email'
                    onChange={handleChange}
                />
                <input 
                    placeholder='DNI' 
                    name='dni'
                    onChange={handleChange}
                />
                <input
                    type='password' 
                    placeholder='Contraseña'
                    name='password'
                    onChange={handleChange}
                />
                <input 
                    type='password'
                    placeholder='Repite Contraseña'
                    name='repeatPassword'
                    onChange={handleChange}
                />
                <button className='btn'>Registrarse</button>
            </form>
        </div>
    </div>
    );

};

export default Signup