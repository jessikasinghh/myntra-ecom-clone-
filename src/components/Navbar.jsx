import React from 'react'
import logo from '../assets/logo.png'
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


                    <div className="col" style={{ textAlign: 'center', textTransform: 'uppercase', paddingRight: '2rem', }}>

                        <ul className="navlst" style={{ color: 'black', textDecoration: 'none', listStyle: 'none', lineHeight: '2rem', display: 'flex', marginLeft: '1rem' }} >
                            <li >
                                <div class="dropdown">
                                    <span>MEN</span>
                                    <div class="dropdown-content">
                                        <div className="row" style={{display:'flex',flexDirection:'row'}}>
                                            <div className="col">
                                            <p>Shirt</p>
                                        <p>Shirt</p>
                                        <p>Shirt</p>
                                        <p>Shirt</p>
                                        <p>Shirt</p>
                                            </div>
                                            <div className="col" style={{marginLeft:'2rem',lineHeight:'1rem'}}>
                                            <p>Shirt</p>
                                        <p>Shirt</p>
                                        <p>Shirt</p>
                                        <p>Shirt</p>
                                        <p>Shirt</p>
                                            </div>
                                            <div className="col">
                                            <p>Shirt</p>
                                        <p>Shirt</p>
                                        <p>Shirt</p>
                                        <p>Shirt</p>
                                        <p>Shirt</p>
                                            </div>
                                            <div className="col"></div>
                                            <div className="col"></div>
                                        </div>
                                        
                                    </div>
                                </div>

                            </li>
                            <li><a herf='#'>women</a></li>
                            <li><a herf='#'>kids</a></li>
                            <li><a herf='#'>home & living</a></li>
                            <li><a herf='#'>beauty</a></li>
                            <li><a herf='#'>studio</a></li>
                        </ul>

                    </div>
                    <div className="col" style={{ display: 'flex', flexDirection: 'row' }}>

                        <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className="col">

                                <div className="srhbar" style={{ marginLeft: '2rem', marginTop: '1rem' }}>
                                    <div>
                                        {/* <MagnifyingGlassIcon style={{ width: '2rem', height: '2rem', marginright: '.3rem' }} /> */}
                                        <input type="text" name="search" id="search" placeholder="Search for products,brands and more " style={{ width: '25rem', height: '1.5rem', borderRadius: '2px' }} />
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div>
                                    <UserIcon style={{ width: '1.2rem', height: '2rem', marginLeft: '2rem', marginTop: '1rem' }} /><br />
                                    <span style={{ marginLeft: '1rem' }}>Profile</span>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className="col">
                                <div>
                                    <HeartIcon style={{ width: '1.2rem', height: '2rem', marginLeft: '1.7rem', marginTop: '1rem' }} /><br />
                                    <span style={{ marginLeft: '1rem' }}>Wishlist</span>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <ShoppingBagIcon style={{ width: '1.2rem', height: '2rem', marginLeft: '1.5rem', marginTop: '1rem' }} /><br />
                                    <span style={{ marginLeft: '1.5rem' }}>Bag</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="men" >
                <div className="row" style={{ display: 'flex', flexDirection: 'row', marginLeft: '2rem' }}>

                    <div className="col">
                        <h6>Topwear</h6>
                    </div>

                    <div className="col" style={{ marginLeft: '1.5rem' }}>
                        <h6>bottomwear</h6>
                    </div>

                    <div className="col" style={{ marginLeft: '1.5rem' }}>
                        <h6>Footwear</h6>
                    </div>

                    <div className="col" style={{ marginLeft: '1.5rem' }}>
                        <h6>Active and sportswear</h6>
                    </div>

                    <div className="col" style={{ marginLeft: '1.5rem' }}>
                        <h6>Fashion accessories</h6>
                    </div>

                </div>
            </div>
        </>
    )
}

