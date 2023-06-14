
import React from 'react'


export const Logindply = () => {
    return (
        <>
            <div style={{ textAlign: "left" }}>
                <p style={{ fontSize: '.8rem',fontWeight:'500' }}>WELCOME</p>
                <p style={{marginTop:'-1rem', fontSize:'.9rem'}}>To access account and manage orders</p>
                <div style={{marginLeft:'2rem',marginTop:'-.5rem'}}>
                 <button> <a href='/LoginPage' style={{textDecoration:'none',color:'black'}}> LOGIN/SIGNUP</a> 

                 </button>
                </div>

                    <div style={{textAlign:'left' , fontSize:'.8rem',marginLeft:'-1.5rem'}}>
                        <ul style={{listStyle:'none'}}>
                            <li >Orders & Returns</li>
                            <li >Profile</li>
                            <li >Saves Cards</li>
                            <li >Addresses</li>
                            <li >Myntra Insider</li>
                            <li >Terms of Use</li>
                            <li >Privacy Policy</li>
                        </ul>
                    </div>

            </div>
        </>
    )
}
