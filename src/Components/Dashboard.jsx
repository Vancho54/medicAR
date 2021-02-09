import React from 'react';

const Dashboard = ({ setOption }) => {

    const handleClick = (e) => {
        
        setOption(e.target.id)
    }

    return(
        <div className='dashboard'>
            <div className='name'>
                <h2>medic<span className='AR'>AR</span></h2>
            </div>
                <div className='links'>
                    <div  
                        className='link'
                        onClick={handleClick}
                        >
                        <h3 id='login'>Ingresar</h3>
                    </div>
                    <div  
                        className='link'
                        onClick={handleClick}
                        >
                        <h3 id='signup'>Registrarse</h3>
                    </div>
                    <div  
                        className='link'
                        onClick={handleClick}
                        >
                        <h3 id='info'>Informacion</h3>
                    </div>
                </div>
            <div className='logo'>
                <img height='60' src='https://upload.wikimedia.org/wikipedia/commons/e/ec/Ministerio_de_Salud.svg' alt=''></img>
            </div>
        </div>
    );
};

export default Dashboard