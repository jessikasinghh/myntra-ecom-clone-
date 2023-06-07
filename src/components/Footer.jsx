import React from 'react'
import appleplay from '../assets/appleplay.png'
import googleplay from '../assets/googleplay.png'
import original from '../assets/original.png'
import returns from '../assets/returns.png'

export const Footer = () => {
    return (
        <>
            <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="row">
                    
                    <div className="row">
                        <div className="col">
                            <b>ONLINE SHOPPING</b>
                            <ul className="online shopping" style={{ color: 'black', textDecoration: 'none', listStyle: 'none', lineHeight: '2rem' }}>
                                <li><a herf='#'>Men</a></li>
                                <li><a herf='#'>Women</a></li>
                                <li><a herf='#'>Kids</a></li>
                                <li><a herf='#'>Home & Living</a></li>
                                <li><a herf='#'>Beauty</a></li>
                                <li><a herf='#'>Gift Cards</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <b>USEFUL LINKS</b>
                        <ul className="online shopping" style={{ color: 'black', textDecoration: 'none', listStyle: 'none', lineHeight: '2rem' }}>
                                <li><a herf='#'>Men</a></li>
                                <li><a herf='#'>Women</a></li>
                                <li><a herf='#'>Kids</a></li>
                                <li><a herf='#'>Home & Living</a></li>
                                <li><a herf='#'>Beauty</a></li>
                                <li><a herf='#'>Gift Cards</a></li>
                            </ul>
                    </div>
                </div>
                <div className="row">
                        <b>CUSTOMER POLICIES</b>
                        <ul className="online shopping" style={{ color: 'black', textDecoration: 'none', listStyle: 'none', lineHeight: '2rem' }}>
                                <li><a herf='#'>Men</a></li>
                                <li><a herf='#'>Women</a></li>
                                <li><a herf='#'>Kids</a></li>
                                <li><a herf='#'>Home & Living</a></li>
                                <li><a herf='#'>Beauty</a></li>
                                <li><a herf='#'>Gift Cards</a></li>
                            </ul>
                </div>
                <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className="row">
                        <div className="row">
                            <div className="row" style={{ display: 'flex', flexDirection: 'row' }} >
                                <div className="col">
                                    <div style={{ marginTop: '5rem'}}>
                                        <a href='/'><img src={appleplay} alt='appleplay' style={{ width: '6.5rem', height: '2.5rem' }} /></a>
                                    </div>
                                </div>

                                <div className="col">
                                    <div style={{ marginTop: '5rem' }}>
                                        <a href='/'><img src={googleplay} alt='googleplay' style={{ width: '6.5rem', height: '2.5rem' }} /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <b>keep in touch</b>
                            </div>

                        </div>
                    </div>

                    <div className="row" >
                        <div className="col">
                            <a href='/'><img src={original} alt='original' style={{ width: '3rem', height: '2.5rem' }} /></a>
                            <b>100% ORIGINAL</b> <span className="fontor">guarantee for all products at myntra.com</span><br />

                        </div>
                        <div className="col" style={{ display: 'flex', flexDirection: 'row' }}>
                            <a href='/'><img src={returns} alt='returns' style={{ width: '3rem', height: '2.5rem' }} /></a>
                            <b> Return within 30days</b> <span className="fontor">of receiving your order</span><br />

                        </div>
                    </div>
                </div>
            </div>


            

        </>
    )
}







{/* <p style={{ marginBottom: '0rem' }}>
                Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls
                | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes |
                Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings |
                Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches |
                Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye
                Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show |
                Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles |
                Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery
                | Designers Sarees
            </p> */}

