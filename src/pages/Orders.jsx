import React from 'react'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from "reactstrap";
import CommonSection from '../components/UI/common-section/CommonSection'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from '../axios'
import "../styles/pagination.css";
import Order from './admin/components/Order';

function Orders() {
    const [loading, setloading] = useState(true)
    const [orders, setorders] = useState([])
    const userId = localStorage.getItem('authid');
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
        axios.get(`orders?userId=${userId}&_sort=id&_order=desc`)
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
                                        <Order order={order} />
                                        {order.status === "Placed" && < Row >
                                            <Col lg="12">
                                                <button style={{
                                                    marginBottom: "5px", border: "none",
                                                    padding: "7px 25px",
                                                    background: "#df2020",
                                                    color: "#fff",
                                                    borderRadius: "5px",
                                                    fontSize: "0.9rem"
                                                }}
                                                    onClick={() => {
                                                        axios.put(`/orders/${order.id}`, {
                                                            ...order,
                                                            status: "Cancelled"
                                                        }).
                                                            then(res => {
                                                                window.location.reload(false);
                                                            })
                                                    }}
                                                >Cancel</button>
                                            </Col>
                                        </Row>
                                        }
                                    </Row>
                                ))
                                }



                            </Container>
                    }
                </section>
            }
        </Helmet >
    )
}

export default Orders