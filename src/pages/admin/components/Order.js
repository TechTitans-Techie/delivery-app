import React from 'react'
import { Col, Row } from 'reactstrap'

function Order({ order }) {
    return (
        <
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

        </>
    )
}

export default Order