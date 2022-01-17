import React from 'react'
import { NavLink } from 'react-router-dom'
import ErrorMessage from './ErrorMessage'
import ErrorTitle from './ErrorTitle'
import './Errorpage.css'
import Error from './Error'
import Illustration from '../assets/samji_illustrator__.jpg'

const Errorpage = () => {
    return (
    
        <div id='background'>
            <div id='card'>
                <div id='illustration'>
                    <img src={Illustration} alt='illustration'/>
                </div>
                <div id='error-content'>
                    <Error error="Page not found"/>
                    <ErrorTitle title="Oh No! Error 404"/>
                    <ErrorMessage message="Maybe Bigfoot has broken this page."/>
                    <ErrorMessage message="Come back to the homepage"/>
                    <div className='btn-section'>
                        <NavLink to='/' className='btn'>Back to Homepage</NavLink>
                        <NavLink to='/' className='go-back'>Go Back to previous page</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Errorpage

