import React from 'react'
import appleplay from '../assets/appleplay.png'
import googleplay from '../assets/googleplay.png'
import original from '../assets/original.png'
import returns from '../assets/returns.png'
import icons from '../assets/icons.webp'

export const Footer = () => {
    return (
        <>
            <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="col" style={{ textAlign: 'left', marginLeft: '4rem' }}>
                    <div className="row">

                        <ul className="online shopping" style={{ color: 'black', textDecoration: 'none', listStyle: 'none', lineHeight: '1rem', fontSize: '.8rem', marginLeft: '0rem' }}>
                            <b style={{ fontSize: '.7rem' }}>ONLINE SHOPPING</b>
                            <li><a herf='#'>Men</a></li>
                            <li><a herf='#'>Women</a></li>
                            <li><a herf='#'>Kids</a></li>
                            <li><a herf='#'>Home & Living</a></li>
                            <li><a herf='#'>Beauty</a></li>
                            <li><a herf='#'>Gift Cards</a></li>
                        </ul>
                    </div>

                    <div className="row" style={{ marginLeft: '0rem' }}>

                        <ul className="online shopping" style={{ color: 'black', textDecoration: 'none', listStyle: 'none', lineHeight: '1rem', fontSize: '.8rem', marginLeft: '0rem' }}>
                            <b style={{ fontSize: '.7rem' }}>USEFUL LINKS</b>
                            <li><a herf='#'>Men</a></li>
                            <li><a herf='#'>Women</a></li>
                            <li><a herf='#'>Kids</a></li>
                            <li><a herf='#'>Home & Living</a></li>
                            <li><a herf='#'>Beauty</a></li>
                            <li><a herf='#'>Gift Cards</a></li>
                        </ul>
                    </div>
                </div>


                <div className="col" style={{ marginLeft: '2rem' }}>

                    <ul className="online shopping" style={{ color: 'black', textDecoration: 'none', listStyle: 'none', lineHeight: '1rem', fontSize: '.8rem' }}>
                        <b style={{ fontSize: '.7rem' }}>CUSTOMER POLICIES</b>
                        <li><a herf='#'>Men</a></li>
                        <li><a herf='#'>Women</a></li>
                        <li><a herf='#'>Kids</a></li>
                        <li><a herf='#'>Home & Living</a></li>
                        <li><a herf='#'>Beauty</a></li>
                        <li><a herf='#'>Gift Cards</a></li>
                    </ul>
                </div>

                <div className="col" style={{ marginLeft: '4rem', marginTop: '.55rem' }} >
                    <b style={{ fontSize: '.7rem' }}>EXPERIENCE MYNTRA APP ON MOBILE</b>
                    <div className="row" style={{ display: 'flex', flexDirection: 'row' }} >
                        <div className="col">
                            {/* <b style={{ fontSize:'.7rem'}}>EXPERIENCE MYNTRA APP ON MOBILE</b> */}
                            <div style={{ marginTop: '1rem' }}>
                                <a href='/'><img src={appleplay} alt='appleplay' style={{ width: '7.5rem', height: '2.5rem' }} /></a>
                            </div>
                        </div>

                        <div className="col" style={{ marginLeft: '1rem' }}>
                            <div style={{ marginTop: '1rem' }}>
                                <a href='/'><img src={googleplay} alt='googleplay' style={{ width: '7.5rem', height: '2.5rem' }} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '.5rem' }}>
                        <b style={{ fontSize: '.7rem' }}>KEEP IN TOUCH</b>
                        <div style={{ marginTop: '1rem' }}>
                            <a href='/'><img src={icons} alt='icons' style={{ width: '8.5rem', height: '7.5rem', marginTop: '-3.5rem' }} /></a>
                        </div>

                    </div>
                </div>


                <div className="col" style={{ marginLeft: '3rem', marginTop: '1rem', fontSize: '.8rem' }}>
                    <div className="row">
                        <a href='/'><img src={original} alt='original' style={{ width: '3rem', height: '2.5rem' }} /></a>
                        <div style={{ marginTop: '-2.5rem', marginLeft: '3.5rem' }}>
                            <b>100% ORIGINAL</b>
                            <span className="fontor">guarantee for<br />all products at myntra.com</span>
                        </div>

                    </div>
                    <div className="row" style={{ display: 'flex', flexDirection: 'row', marginTop: '1rem' }}>
                        <a href='/'><img src={returns} alt='returns' style={{ width: '3rem', height: '2.5rem' }} /></a>
                        <div style={{ marginTop: '.5rem', marginLeft: '.5rem' }}>
                            <b> Return within 30days</b>
                            <span className="fontor">of <br />receiving your order</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <p style={{ marginBottom: '0rem' ,marginLeft:'6rem',marginRight:'1rem' , textAlign:'left' , width:'74rem',fontSize: '.9rem' }}>
                    Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls
                    | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes |
                    Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings |
                    Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches |
                    Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye
                    Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show |
                    Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles |
                    Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery
                    | Designers Sarees
                    </p>
            </div>
        </>
    )
}







/* <p style={{ marginBottom: '0rem' }}>
    Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls
    | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes |
    Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings |
    Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches |
    Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye
    Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show |
    Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles |
    Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery
    | Designers Sarees
</p> */

