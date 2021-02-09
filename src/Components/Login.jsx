import React from 'react';

const Login = () => {



    return(
    <div className='form'>
        <div className='card'>
            <form className='form-inputs'>
                <input placeholder='DNI' />
                <input placeholder='Contraseña'/>
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