import React from 'react'
import Numbercounter from './Numbercounter'
import Latestnews from './Latestnews'






function Number() {
    return (
        <>
            <div
                className="bg-[url('https://wp.hostlin.com/nilachol/images/background/2.jpg')] bg-fixed bg-cover bg-center min-h-screen"
            >
             <Numbercounter/>
            <Latestnews/>
            </div>

        </>
    )
}

export default Number
