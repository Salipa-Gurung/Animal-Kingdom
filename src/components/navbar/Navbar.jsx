import { Divider, Typography } from 'antd'
import React from 'react'

import catFootprint from '../../assets/cat-footprint.png'

const Navbar = () => {
    return (
        <header style={{textAlign:"center"}}>
            <Typography.Title level={1} style={{marginTop:".5em"}}>
                Animal Kingdom
            </Typography.Title>
            <Divider orientation="right">
                <img alt="cat footprint" src={catFootprint} /> 
            </Divider>
        </header>
    )
}

export default Navbar
