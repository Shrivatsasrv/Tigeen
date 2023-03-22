import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from "../Components/Footer"
import Body from '../Components/Body'


const HomePage = () => {
    const [logoPosition, setlogoPosition,] = useState("start")
    const [color, setColor] = useState("#1976d2")
    const [showheader, setShowheader] = useState(true)
    const [showfooter, setShowfooter] = useState(true)

    const [leftdrawer, setleftdrawer] = useState(true)
    const [rightdrawer, setrightdrawer] = useState(true)

    const [showtabs, setshowtabs] = useState(true)

    console.log("showtabs", showtabs)

    return (
        <>
            {showheader && <Header logoPosition={logoPosition} color={color} leftdrawer={leftdrawer} rightdrawer={rightdrawer} showtabs={showtabs} />}
            <Body
                setlogoPosition={setlogoPosition}
                color={color} setColor={setColor}
                showheader={showheader} setShowheader={setShowheader}
                showfooter={showfooter} setShowfooter={setShowfooter}
                leftdrawer={leftdrawer} setleftdrawer={setleftdrawer}
                rightdrawer={rightdrawer} setrightdrawer={setrightdrawer}
                showtabs={showtabs} setshowtabs={setshowtabs}
            />
            {showfooter && <Footer leftdrawer={leftdrawer} rightdrawer={rightdrawer} />}
        </>
    )
}

export default HomePage