import React from 'react'
import './Header.scss'

export default function Header() {
    return (
        <div className='heading-container'>
            <h1 className='heading-container-text heading-container-main-text'>Currency converter</h1>
            <div className='heading-container-text'>Check live foreign currency exchange rates <br />
                Inspired by Xe design. Using exchangerate.host
            </div>
        </div>
    )
}
