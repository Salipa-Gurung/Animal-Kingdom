import React from 'react'
import { data } from '../../utils/data';
import PhotoGrid from '../photogrid/PhotoGrid';

const HomePage = () => {
    return (
        <div>
            <PhotoGrid title="Dogs" data={data} />
        </div>
    )
}

export default HomePage
