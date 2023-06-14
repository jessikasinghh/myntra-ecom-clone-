import React from 'react'
import login from '../assets/login.png'
import { Footer} from './Footer'

export const LoginPage = () => {
    return (
        <>
            <div>
            <a href='/'><img src={login} alt='login' /></a>
            </div>
            
            <div className="row">
            <Footer/>
            </div>
        </>
    )
}
      