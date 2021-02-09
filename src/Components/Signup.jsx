import React from 'react';

const Signup = () => {



    return(
    <div className='form'>
        <div className='card'>
            <form className='form-inputs'>
                <input placeholder='E-mail' />
                <input placeholder='DNI' />
                <input placeholder='Contraseña'/>
                <input placeholder='Repite Contraseña'/>
                <button className='btn'>Registrarse</button>
            </form>
        </div>
    </div>
    );

};

export default Signup