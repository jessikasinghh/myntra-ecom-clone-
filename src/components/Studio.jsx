import React from 'react'
import stlogo from '../assets/studio logo.png'
import stbanner from'../assets/sudio-nav-banner.png'

export const Studio = () => {
    return (
        <>
            <div className="row" style={{ textAlign: 'center', marginTop: '.5rem' }}>

                <div className="col" >
                    <a href='/'><img src={stlogo} alt='stlogo' style={{ width: '6rem', height: '2rem' }} /></a>
                </div>
                <p style={{ marginTop: '0rem' }}>Your daily inspiration for everything fashion</p>
                <div className="col" >
                    <a href='/'><img src={stbanner} alt='stbanner' style={{ width: '30rem', height: '16rem' }} /></a>
                </div>
                <button class="btn" style={{ backgroundColor: 'white', height:'2.5rem',width:'12rem',marginTop: '1rem', marginBottom: '.8rem' }}>EXPLORE STUDIO</button>
            </div>
        </>
    )
}
