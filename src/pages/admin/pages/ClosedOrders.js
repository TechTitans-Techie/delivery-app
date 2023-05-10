import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'reactstrap'
import axios from '../../../axios'
import Order from '../components/Order'
import CommonSection from '../../../components/UI/common-section/CommonSection'


function AcceptedOrders() {
    const [loading, setloading] = useState(true)
    const [orders, setorders] = useState([])
    useEffect(() => {
        axios.get(`orders?status=Delivered&_sort=id&_order=desc`)
            .then(res => {
                setorders(res.data)
                setloading(false)
            })
    }, [])
    return (
        <>
            <CommonSection title="Delivered Orders" />
            {loading ? <>Loading ... </> :
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
                                        {order.status === "Delivered" && < Row >
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
                                                            status: "Accepted"
                                                        }).
                                                            then(res => {
                                                                window.location.reload(false);
                                                            })
                                                    }}
                                                >Reopen Order</button>
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
        </>
    )
}

export default AcceptedOrders