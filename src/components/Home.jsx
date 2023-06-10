import React from 'react'
import homebanner from '../assets/homebanner.png'
import homebanner2 from '../assets/homebanner2.png'
import a1 from '../assets/a1.webp'
import a2 from '../assets/a2.webp'
import a3 from '../assets/a3.webp'
import a4 from '../assets/a4.webp'
import a5 from '../assets/a5.webp'
import a6 from '../assets/a6.webp'
import a7 from '../assets/a7.webp'
import a8 from '../assets/a8.webp'
import a9 from '../assets/a9.webp'
import a10 from '../assets/a10.webp'
import a11 from '../assets/a11.webp'
import a12 from '../assets/a12.webp'
import a13 from '../assets/a13.webp'
import a14 from '../assets/a14.webp'
import a15 from '../assets/a15.webp'
import a16 from '../assets/a16.webp'
import homebanner3 from '../assets/homebanner3.png'


export const Home = () => {
  return (
    <>
      <div className="col" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a href='/'><img src={homebanner} alt='homebanner' /></a>
      </div>
      <div className="col" style={{textAlign: 'center', marginTop: '.5rem' }}>
        <a href='/'><img src={homebanner2} alt='homebanner2' /></a>
      </div>
      <div className="row">
        <div className="col" style={{ display: 'flex', flexDirection: 'row' }}>
          
            <a href='/'><img src={a1} alt='a1' style={{ width: '10.5rem', height: '15rem' }}/></a>
            <a href='/'><img src={a2} alt='a2' style={{ width: '10.5rem', height: '15rem' }}/></a>
            <a href='/'><img src={a3} alt='a3' style={{ width: '10.5rem', height: '15rem' }}/></a>
            <a href='/'><img src={a4} alt='a4' style={{ width: '10.5rem', height: '15rem' }}/></a>
            <a href='/'><img src={a5} alt='a5' style={{ width: '10.5rem', height: '15rem' }}/></a>
            <a href='/'><img src={a6} alt='a6' style={{ width: '10.5rem', height: '15rem' }}/></a>
            <a href='/'><img src={a7} alt='a7' style={{ width: '10.5rem', height: '15rem' }}/></a>
            <a href='/'><img src={a8} alt='a8' style={{ width: '10.5rem', height: '15rem' }}/></a>
          
        </div>
        <div className="col" style={{ display: 'flex', flexDirection: 'row' }}>
          <a href='/'><img src={a9} alt='a9' style={{ width: '10.5rem', height: '15rem' }}/></a>
          <a href='/'><img src={a10} alt='a10' style={{ width: '10.5rem', height: '15rem' }}/></a>
          <a href='/'><img src={a11} alt='a11' style={{ width: '10.5rem', height: '15rem' }}/></a>
          <a href='/'><img src={a12} alt='a12' style={{ width: '10.5rem', height: '15rem' }}/></a>
          <a href='/'><img src={a13} alt='a13' style={{ width: '10.5rem', height: '15rem' }}/></a>
          <a href='/'><img src={a14} alt='a14' style={{ width: '10.5rem', height: '15rem' }}/></a>
          <a href='/'><img src={a15} alt='a15' style={{ width: '10.5rem', height: '15rem' }}/></a>
          <a href='/'><img src={a16} alt='a16' style={{ width: '10.5rem', height: '15rem' }}/></a>
        </div>
      </div>
      <div className="bbuys" style={{ marginTop: '1rem', textAlign: 'center' }}>
        <a href='/'><img src={homebanner3} alt='homebanner3' /></a>
      </div>
      <div className="row" style={{textAlign:'center'}}>
        <h1 style={{fontSize:'3.5rem', color: '#fb3737'}}>WORDROBE ESSINTIAL</h1>
        <p style={{fontSize:'1.8rem',marginTop:'-2rem',fontWeight:'inherit'}}>It's Time To Refresh Your Closet!</p>
      </div>
    </>
  )
}
