import React from 'react'
import "../CSS/Player.css"
import Body from './Body'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Player = ({spotify}) => {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body />
                <Footer />
            </div>
        </div>
    )
}

export default Player
