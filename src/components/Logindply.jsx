import React from 'react'

export const Logindply = () => {
    return (
        <>
            <div>
                <p style={{ fontSize: '1rem' }}>WELCOME</p>
                <p>To access account and manage orders</p>
                <div>
                    <input type="text" name="search" id="search" placeholder="LOGIN / SIGNUP" style={{ width: '25rem', height: '2rem', borderRadius: '10px' }} />
                    <Button variant="light">Light</Button>{' '}

                </div>
            </div>
        </>
    )
}
