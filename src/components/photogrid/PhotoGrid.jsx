import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './photogrid.css'
import { Typography } from 'antd'

function getRealImgDimension(url) {
    if (typeof window !== 'undefined') {
      let image = new Image()
      image.src = url
      return new Promise((resolve, reject) => {
        image.onload = () => {
          resolve({
            url,
            width: image.width,
            height: image.height,
          })
        }
        image.onerror = () => {
          reject()
        }
      })
    }
    return Promise.resolve({
      url,
      width: 1,
      height: 1,
    })
  }

const PhotoGrid = ({ title, data, noneTitle }) => {

    const [photoData, setPhotoData] = useState([])

    useEffect(() => {
        data.forEach(photo => 
            getRealImgDimension(photo.url).then(photoInfo => {
                    setPhotoData(prevData => [...prevData, photoInfo])
                    // console.log(photoData);
                }
            )        
        )
    }, [data])

    const getWidth = (w, i) => {
        if(i === 3 || i === 7 | i === 11){
            return '300px'
        }

        if(w > 300){
            return '600px'
        }

        return '300px'
    }

    const getSpan = (w, i) => {
        if(i === 3 || i === 7 || i === 11){
            return 'span 1'
        }

        if(w > 300){
            return 'span 2'
        }

        return 'span 1'
    }

    return (
        <article className="photo--grid-section">
            {
                !noneTitle && (
                    <Typography.Title level={3}>
                        {title}
                    </Typography.Title>
                )
            }
            <div className="photo-grid">
                {
                    data.map((image, i) => (
                        <Link to={`/detail/${image.id}/${title}`} key={image.id}
                            style={{
                                gridColumn: getSpan(photoData[i]?.width, i),
                                gridRow: photoData[i]?.height>300? 'span 2': 'span 1',
                            }}
                        >
                            <div>   
                                <img src={image.url} alt={image.name} 
                                        style={{
                                            width: getWidth(photoData[i]?.width, i),
                                            height: photoData[i]?.height<=300?'300px':'600px',
                                            maxWidth:'600px',
                                            maxHeight:'600px',
                                            objectFit: 'cover'
                                        }} 
                                />
                            </div>
                        </Link>
                    ))
                }
            </div>
        </article>
    )
}

export default PhotoGrid
