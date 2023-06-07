import React from 'react'
import logo from '../assets/logo.png'
import { Studio } from './Studio'
import { Footer} from './Footer'
import { UserIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
// import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import '../styles/navbar.scss'
export const Navbar = () => {
    return (
        <>
            <div className="row" style={{ display: 'flex', flexDirection: 'row', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>


                <div className="col" style={{ marginLeft: '3rem' }}>

                    <a href='/'><img src={logo} alt='logo' style={{ width: '5rem', height: '4.5rem' }} /></a>
                </div>
                <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>


                    <div className="col" style={{ textAlign: 'center', paddingRight: '2rem', }}>

                        <ul className="navlst" style={{ color: 'black', textDecoration: 'none', listStyle: 'none', lineHeight: '2rem', display: 'flex', marginLeft: '1rem' ,textAlign:'left' }} >
                            <li >
                                <div class="dropdown">
                                    <span>MEN</span>
                                    <div class="dropdown-content">
                                        <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div className="col" style={{ marginLeft: '.5rem', lineHeight: '.5rem', fontSize: '.8rem'}}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Topwear</p>
                                                <p>FormalShirt</p>
                                                <p>casualShirt</p>
                                                <p>TShirt</p>
                                                <p>tops</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Bottomwear</p>
                                                <p>Jeans</p>
                                                <p>shorts</p>
                                                <p>Trousers</p>
                                                <p>Shirt</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>footwear</p>
                                                <p>Formalshoes</p>
                                                <p>Flats</p>
                                                <p>Heels</p>
                                                <p>Boots</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Beautyandpersonalcare</p>
                                                <p>Makeup</p>
                                                <p>Skincare</p>
                                                <p>Fragrances</p>
                                                <p>Lipsticks</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', marginRight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Gadgets</p>
                                                <p>Speaker</p>
                                                <p>Headphones</p>
                                                <p>Fitness gadgets</p>
                                                <p>watches</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="dropdown">
                                    <span>WOMEN</span>
                                    <div class="dropdown-content">
                                        <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div className="col" style={{ marginLeft: '.5rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Topwear</p>
                                                <p>FormalShirt</p>
                                                <p>casualShirt</p>
                                                <p>TShirt</p>
                                                <p>tops</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Bottomwear</p>
                                                <p>Jeans</p>
                                                <p>shorts</p>
                                                <p>Trousers</p>
                                                <p>Shirt</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>footwear</p>
                                                <p>Formalshoes</p>
                                                <p>Flats</p>
                                                <p>Heels</p>
                                                <p>Boots</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Beauty and personalcare</p>
                                                <p>Makeup</p>
                                                <p>Skincare</p>
                                                <p>Fragrances</p>
                                                <p>Lipsticks</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', marginRight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Gadgets</p>
                                                <p>Speaker</p>
                                                <p>Headphones</p>
                                                <p>Fitness gadgets</p>
                                                <p>watches</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="dropdown">
                                    <span>KIDS</span>
                                    <div class="dropdown-content">
                                        <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div className="col" style={{ marginLeft: '.5rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Topwear</p>
                                                <p>FormalShirt</p>
                                                <p>casualShirt</p>
                                                <p>TShirt</p>
                                                <p>tops</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Bottomwear</p>
                                                <p>Jeans</p>
                                                <p>shorts</p>
                                                <p>Trousers</p>
                                                <p>Shirt</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>footwear</p>
                                                <p>Formalshoes</p>
                                                <p>Flats</p>
                                                <p>Heels</p>
                                                <p>Boots</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Beauty and personalcare</p>
                                                <p>Makeup</p>
                                                <p>Skincare</p>
                                                <p>Fragrances</p>
                                                <p>Lipsticks</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', marginRight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Gadgets</p>
                                                <p>Speaker</p>
                                                <p>Headphones</p>
                                                <p>Fitness gadgets</p>
                                                <p>watches</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="dropdown">
                                    <span>HOME AND LIVING</span>
                                    <div class="dropdown-content">
                                        <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div className="col" style={{ marginLeft: '.5rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Topwear</p>
                                                <p>FormalShirt</p>
                                                <p>casualShirt</p>
                                                <p>TShirt</p>
                                                <p>tops</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Bottomwear</p>
                                                <p>Jeans</p>
                                                <p>shorts</p>
                                                <p>Trousers</p>
                                                <p>Shirt</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>footwear</p>
                                                <p>Formalshoes</p>
                                                <p>Flats</p>
                                                <p>Heels</p>
                                                <p>Boots</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Beauty and personalcare</p>
                                                <p>Makeup</p>
                                                <p>Skincare</p>
                                                <p>Fragrances</p>
                                                <p>Lipsticks</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', marginRight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Gadgets</p>
                                                <p>Speaker</p>
                                                <p>Headphones</p>
                                                <p>Fitness gadgets</p>
                                                <p>watches</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="dropdown">
                                    <span>BEAUTY</span>
                                    <div class="dropdown-content">
                                        <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div className="col" style={{ marginLeft: '.5rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Topwear</p>
                                                <p>Formal Shirt</p>
                                                <p>casualShirt</p>
                                                <p>TShirt</p>
                                                <p>tops</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Bottomwear</p>
                                                <p>Jeans</p>
                                                <p>shorts</p>
                                                <p>Trousers</p>
                                                <p>Shirt</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>footwear</p>
                                                <p>Formalshoes</p>
                                                <p>Flats</p>
                                                <p>Heels</p>
                                                <p>Boots</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Beauty and personalcare</p>
                                                <p>Makeup</p>
                                                <p>Skincare</p>
                                                <p>Fragrances</p>
                                                <p>Lipsticks</p>
                                            </div>
                                            <div className="col" style={{ marginLeft: '2rem', lineHeight: '.5rem', marginRight: '.5rem', fontSize: '.8rem' }}>
                                                <p style={{ color: 'red', fontSize: '.8rem' }}>Gadgets</p>
                                                <p>Speaker</p>
                                                <p>Headphones</p>
                                                <p>Fitnessgadgets</p>
                                                <p>watches</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="dropdown">
                                    <span>STUDIO</span>
                                    <div class="dropdown-content">
                                        <div className="row" >
                                            <Studio/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style={{ color: 'red', fontSize: '.5rem', margin: '0', marginTop: '-8px' }}><a herf='#'>NEW</a>

                                {/* <div className="dropdown">
                                    <Studio />
                                </div> */}
                            </li>
                        </ul>

                    </div>
                    <div className="col" style={{ display: 'flex', flexDirection: 'row' }}>

                        <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className="col">

                                <div className="srhbar" style={{ marginLeft: '1rem', marginTop: '1rem' }}>
                                    <div>
                                        {/* <MagnifyingGlassIcon style={{ width: '2rem', height: '2rem', marginright: '.3rem' }} /> */}
                                        <input type="text" name="search" id="search" placeholder="Search for products,brands and more " style={{ width: '25rem', height: '2rem', borderRadius: '10px' }} />
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div>
                                    <UserIcon style={{ width: '1.2rem', height: '2rem', marginLeft: '2rem', marginTop: '1rem' }} /><br />
                                    <span style={{ marginLeft: '1rem', marginTop: '-1rem', fontSize: '.8rem' }}>Profile</span>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className="col">
                                <div>
                                    <HeartIcon style={{ width: '1.2rem', height: '2rem', marginLeft: '1.7rem', marginTop: '1rem' }} /><br />
                                    <div className="col">
                                        <span style={{ marginLeft: '1rem', fontSize: '.8rem' }}>Wishlist</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div>
                                    <ShoppingBagIcon style={{ width: '1.2rem', height: '2rem', marginLeft: '1.5rem', marginTop: '1rem' }} /><br />
                                    <span style={{ marginLeft: '1.5rem', fontSize: '.8rem' }}>Bag</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
<Footer/>
        </>
    )
}

