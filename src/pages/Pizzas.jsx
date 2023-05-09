import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";

import pizzas from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";
import ReactPaginate from "react-paginate";
import beverages from "../assets/fake-data/beverages";
import bestSellers from "../assets/fake-data/bestSellers";
import newLaunches from "../assets/fake-data/newLaunches";
import sides from "../assets/fake-data/sides";
import combos from "../assets/fake-data/combos";
import "../styles/pagination.css";
import { useEffect } from "react";

const Pizzas = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const menu = {
    Pizzas: pizzas,
    Sides: sides,
    Beverages: beverages,
    Combos: combos,
    "Best Sellers": bestSellers,
    "New Launches": newLaunches
  }


  const categories = ["Pizzas", "Sides", "Beverages", "Combos", "New Launches", "Best Sellers"]
  const [category, setCategory] = useState("Pizzas")
  let products = menu[category]
  const searchedProduct = products;
  const productPerPage = 4;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  useEffect(() => {
    products = menu[category]
  }, [category])

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  return (
    <Helmet title="All Pizzas">
      <Container>
        <Row
          style={{ border: "1px solid #fde4e4" }}
        >
          {categories.map(cat => (
            <Col
              lg="3"
              md="4"
              sm="6"
              xs="6"
              key={cat}
              className="mb-3 mt-3"
            >
              <button onClick={() => { setCategory(cat) }} className={category === cat ? "category_btn_active" : "category_btn"}>{cat}</button>
            </Col>
          ))}



        </Row>
        <Row>
          {displayPage.map((item) => (
            <Col
              lg="3"
              md="4"
              sm="6"
              xs="6"
              key={item.id}
              className="mb-4 mt-4"
            >
              <ProductCard item={item} />
            </Col>
          ))}
          <div className="d-flex justify-content-center mt-4 mb-4">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              containerClassName="paginationBttns"
            />
          </div>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Pizzas;
