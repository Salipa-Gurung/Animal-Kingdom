import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Typography, Row, Col, Card, Space } from 'antd'

import './detailpage.css'

import { data } from '../../utils/data'
import PhotoGrid from '../photogrid/PhotoGrid'

const DetailPage = () => {

    const { id, selectedCategory } = useParams()
    const [animal, setAnimal] = useState({
        name: '',
        lifeSpan: '',
        description: ``,
        url: ''
    })
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        setAnimal(data[id])
        setFilteredData(data.filter(animal => animal.id !== id))
    }, [id])

    return (
        <div className="detail-page">
            <Space direction="vertical">
                <div className="detail--page_top-section">
                    <Typography.Title level={3}>
                        <Link to="/">&larr;</Link> {selectedCategory} / {animal.name}
                    </Typography.Title>
                </div>
                <Card>
                    <Row>
                        <Col span={8}>
                            <img src={animal.url} alt={animal.name} width="350"/>
                        </Col>
                        <Col span={16}>
                            <p><b>Name:</b> {animal.name}</p>
                            <p><b>Lifespan:</b> {animal.lifeSpan}</p>
                            <p><b>Description:</b> {animal.description}</p>
                        </Col>
                    </Row>
                </Card>
                <div className="spacer" />
                <div className="realted-section">
                    <Typography.Title level={3}>
                        Related Animals
                    </Typography.Title>
                    <PhotoGrid data={filteredData} title={selectedCategory} noneTitle />
                </div>
            </Space>
        </div>
    )
}

export default DetailPage
