import React from 'react'
import Header from './components/Header'
import { Col, Container, NavLink, Row } from 'reactstrap'

function Admin() {



    const nav__links = [
        {
            display: "Revenue",
            path: "/revenue",
        },
        {
            display: "Open Orders",
            path: "/openOrders",
        },
        {
            display: "Accepted Orders",
            path: "/acceptedOrders",
        },
        {
            display: "Rejected Orders",
            path: "/rejectedOrders",
        },
    ];

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col lg="2" style={{
                        backgroundColor: "#df2020",
                        color: "#fcfcfc"
                    }}>
                        {nav__links.map((item, index) => (
                            <NavLink
                                to={item.path}
                                key={index}
                                className={(navClass) =>
                                    navClass.isActive ? "active__menu" : ""
                                }


                            >
                                <span style={{ color: "#ffffff" }}>{item.display}</span>
                            </NavLink>
                        ))}
                    </Col>
                    <Col lg="9">
                        COntent
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default Admin