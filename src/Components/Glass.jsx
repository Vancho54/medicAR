import React, { useState } from 'react'
import Form from './Form'
import Dashboard from './Dashboard'

const Glass = () => {

    const [option, setOption] = useState('login')

    return (
        <>
        <section className='glass'>
            <Dashboard 
                setOption={setOption}
            />
            <Form option={option} />
        </section>
        <div className='circle-1'></div>
        <div className='circle-2'></div>
        </>
    )
};

export default Glass