import React from 'react'
import './spinner.css'

const Spinner: React.FC = (): JSX.Element => {

    return (
        <div className='spinner-center'>
            <div className="loader"></div>
        </div>
    )
}

export default Spinner
