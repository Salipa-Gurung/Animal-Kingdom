import React from 'react'
import './Errorpage.css'

const ErrorMessage = (props) => {
    return (
        <div id='error-message'>
            {props.message}
        </div>
    )
}

export default ErrorMessage
