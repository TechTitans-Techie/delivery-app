import React from 'react'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from "reactstrap";
import CommonSection from '../components/UI/common-section/CommonSection'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from '../axios'

function Orders() {
    const [loading, setloading] = useState(true)
    const [orders, setorders] = useState([])
    // const orders = [
    //     {
    //         "items": [
    //             {
    //                 "id": "03",
    //                 "title": "Double Cheese Margherita",
    //                 "image01": "/static/media/product_3.1.9c207cdf.jpg",
    //                 "price": 110,
    //                 "quantity": 1,
    //                 "totalPrice": 110
    //             },
    //             {
    //                 "id": "03",
    //                 "title": "Double Cheese Margherita",
    //                 "image01": "/static/media/product_3.1.9c207cdf.jpg",
    //                 "price": 110,
    //                 "quantity": 1,
    //                 "totalPrice": 110
    //             }
    //         ],
    //         "totalAmount": 110,
    //         "totalQuantity": 1,
    //         "status": "Placed",
    //         "id": 1
    //     },
    //     {
    //         "items": [
    //             {
    //                 "id": "03",
    //                 "title": "Double Cheese Margherita",
    //                 "image01": "/static/media/product_3.1.9c207cdf.jpg",
    //                 "price": 110,
    //                 "quantity": 1,
    //                 "totalPrice": 110
    //             }
    //         ],
    //         "totalAmount": 110,
    //         "totalQuantity": 1,
    //         "status": "Placed",
    //         "id": 1
    //     }
    // ]
    useEffect(() => {
        axios.get("orders")
            .then(res => {
                setorders(res.data)
                // console.log(res.data)
                setloading(false)
            })
    }, [])
    return (
        <Helmet title="orders">
            <CommonSection title="Your Orders" />
            {console.log(orders)}
            {loading ? <>Loading</> :
                <section>
                    {
                        orders.length === 0 ? <Container>
                            <Row>
                                <Col
                                    lg="12">
                                    No Orders found
                                </Col>
                            </Row>
                        </Container> :

                            <Container>
                                {orders.map(order => (
                                    <Row
                                        style={{
                                            border: "2px solid #fde4e4",
                                            marginBottom: "10px",
                                            padding: "0px"
                                        }}
                                    >
                                        <Row >
                                            <Col lg="12">
                                                Order Id: {order.id}
                                            </Col>
                                        </Row>
                                        <Row style={{ borderTop: "1px dotted #fde4e4" }}>
                                            <Col lg="12">
                                                {order.items.map(item => (
                                                    <Row>
                                                        <Col
                                                            lg="8"
                                                            md="8"
                                                            sm="8"
                                                            xs="8">
                                                            <>
                                                                {item.title} * {item.quantity}
                                                            </>
                                                        </Col>
                                                        <Col lg="4"
                                                            md="4"
                                                            sm="4"
                                                            xs="4">

                                                            <>
                                                                ₹{item.totalPrice} /-
                                                            </>

                                                        </Col>
                                                    </Row>

                                                ))}
                                            </Col>
                                        </Row>
                                        <Row
                                            style={{ borderTop: "1px dotted #fde4e4" }}
                                        >
                                            <Col lg="8">
                                                Total Price
                                            </Col>
                                            <Col lg="4">
                                                ₹{order.totalAmount}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="8">
                                                Status
                                            </Col>
                                            <Col lg="4">
                                                {order.status}
                                            </Col>
                                        </Row>

                                    </Row>
                                ))
                                }


                            </Container>
                    }
                </section>
            }
        </Helmet>
    )
}

export default Orders