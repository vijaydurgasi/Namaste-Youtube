import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
    return (
        <div className='border border-black px-1 py-1 '>
            <div className='flex gap-4'>
                <Sidebar />
                <MainContainer />
            </div>
        </div>
    )
}

export default Body