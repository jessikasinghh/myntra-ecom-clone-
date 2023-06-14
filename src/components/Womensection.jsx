import React from 'react'
import { Footer } from './Footer'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import wsection1 from '../assets/Wsection1.png'
import wsection2 from '../assets/wsection2.png'
import wsection3 from '../assets/wsection3.png'
import wsection4 from '../assets/wsection4.png'
// import Screenshot9 from '../assets/Screenshot9.png'
// import wsection5 from '../assets/wsection5.png'
// import wsection6 from '../assets/wsection6.png'
// import wsection7 from '../assets/wsection7.png'
// import wsection8 from '../assets/wsection8.png'
import filterss from '../assets/filterss.png'
import filtersss from '../assets/filtersss.png'

export const Womensection = () => {
    return (
        <>


            <div className="row" style={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>

                <div className="row">
                    <div className="col" style={{ display: 'flex', flexDirection: 'row' }}>
                        <p style={{ fontWeight: 'bold', marginLeft: '.5rem' }}>FILTERS</p>
                        <p style={{ fontWeight: 'bold', marginLeft: '3.5rem', color: 'red', fontSize: '.8rem' }}>CLEAR ALL</p>

                    </div>
                </div>


                <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className="col">
                        <a href='/'><img src={filterss} alt='filterss' /></a>
                        <a href='/'><img src={filtersss} alt='filtersss' /></a>
                    </div>


                    <div className="col">

                        <Card style={{ width: '13rem', height: '25rem' }}>
                            <Card.Img variant="top" />
                            <a href='/'><img src={wsection1} alt='Wsection1' style={{ textAlign: 'center' }} /></a>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold' }}>LIBAS</Card.Title>
                                <Card.Text style={{ marginTop: '0rem' }}>
                                    Kurta with plazzo and duppata
                                </Card.Text>
                                <Card.Text style={{ fontWeight: 'bold', marginTop: ' -.8rem' }}>
                                    Rs. 1525
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col" style={{ marginLeft: '.5rem' }}>
                        <Card style={{ width: '13rem', height: '25rem' }}>
                            <Card.Img variant="top" />
                            <a href='/'><img src={wsection2} alt='wsection2' style={{ textAlign: 'center' }} /></a>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold' }}>AHIKA</Card.Title>
                                <Card.Text style={{ marginTop: '0rem' }}>
                                    Lorem ipsum dolor sit amet.
                                </Card.Text>
                                <Card.Text style={{ fontWeight: 'bold', marginTop: ' -.8rem' }}>
                                    Rs. 1825
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col" style={{ marginLeft: '.5rem' }}>
                        <Card style={{ width: '13rem', height: '25rem' }}>
                            <Card.Img variant="top" />
                            <a href='/'><img src={wsection3} alt='wsection3' style={{ textAlign: 'center' }} /></a>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold' }}>LIBAS</Card.Title>
                                <Card.Text style={{ marginTop: '0rem' }}>
                                    Lorem ipsum dolor sit amet.
                                </Card.Text>
                                <Card.Text style={{ fontWeight: 'bold', marginTop: ' -.8rem' }}>
                                    Rs. 2000
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col" style={{ marginLeft: '.5rem' }}>
                        <Card style={{ width: '13rem', height: '25rem' }}>
                            <Card.Img variant="top" />
                            <a href='/'><img src={wsection4} alt='Wsection4' style={{ textAlign: 'center' }} /></a>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold' }}>KALINI</Card.Title>
                                <Card.Text style={{ marginTop: '0rem' }}>
                                    Lorem ipsum dolor sit amet.
                                </Card.Text>
                                <Card.Text style={{ fontWeight: 'bold', marginTop: ' -.8rem' }}>
                                    Rs. 876
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                {/* <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className="col" style={{ marginLeft: '.5rem' }}>
                        <Card style={{ width: '13rem', height: '25rem' }}>
                            <Card.Img variant="top" />
                            <a href='/'><img src={wsection5} alt='wsection5' style={{ textAlign: 'center' }} /></a>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold' }}>ANOUK</Card.Title>
                                <Card.Text style={{ marginTop: '0rem' }}>
                                    Kurta with plazzo and duppata
                                </Card.Text>
                                <Card.Text style={{ fontWeight: 'bold', marginTop: ' -.8rem' }}>
                                    Rs. 990
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col" style={{ marginLeft: '.5rem' }}>
                        <Card style={{ width: '13rem', height: '25rem' }}>
                            <Card.Img variant="top" />
                            <a href='/'><img src={wsection6} alt='wsection6' style={{ textAlign: 'center' }} /></a>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold' }}>KHUSHAL K</Card.Title>
                                <Card.Text style={{ marginTop: '0rem' }}>
                                    Kurta with plazzo and duppata
                                </Card.Text>
                                <Card.Text style={{ fontWeight: 'bold', marginTop: ' -.8rem' }}>
                                    Rs. 2179
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col" style={{ marginLeft: '2rem' }}>
                        <Card style={{ width: '13rem', height: '25rem' }}>
                            <Card.Img variant="top" />
                            <a href='/'><img src={wsection7} alt='wsection7' style={{ textAlign: 'center' }} /></a>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold' }}>ENDO IRA</Card.Title>
                                <Card.Text style={{ marginTop: '0rem' }}>
                                    Kurta with plazzo and duppata
                                </Card.Text>
                                <Card.Text style={{ fontWeight: 'bold', marginTop: ' -.8rem' }}>
                                    Rs. 789
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col" style={{ marginLeft: '2rem' }}>
                        <Card style={{ width: '13rem', height: '25rem' }}>
                            <Card.Img variant="top" />
                            <a href='/'><img src={wsection8} alt='Wsection8' style={{ textAlign: 'center' }} /></a>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold' }}>VARANGA</Card.Title>
                                <Card.Text style={{ marginTop: '0rem' }}>
                                    Kurta with plazzo and duppata
                                </Card.Text>
                                <Card.Text style={{ fontWeight: 'bold', marginTop: ' -.8rem' }}>
                                    Rs. 1200
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div>
                </div> */}
                {/* <a href='/'><img src={Screenshot9} alt='Screenshot9' /></a> */}
            </div>
            <div className="row" style={{marginTop:'2rem'}}>
                <Footer />
            </div>

        </>
    )
}
