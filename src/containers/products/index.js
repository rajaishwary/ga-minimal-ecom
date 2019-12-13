import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProducts } from "../../modules/products";
import { Container, Heading, ProductsContainer, ProductCard, ProductImg, ProductName, SubText } from "./styles";
import Button from "../../components/button";

class Products extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch(getProducts());
  }

  onClickPay = (product, e) => {
    let options = {
      key: "rzp_test_1DP5mmOlF5G5ag",
      amount: product.price * 100,
      currency: "INR",
      name: product.name,
      description: product.category,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4F9cW0ynctHPFW5oBWVqAfKYFJouV93VxhNcL6HaUQSy-e4T&s",
      handler: function(response) {
        alert(`Your order id is ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Aishwary Raj",
        email: "rajaishwary@gmail.com",
        contact: "9159078831"
      },
      notes: {
        address: "Added notes"
      },
      theme: {
        color: "#5F86C9"
      }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    e.preventDefault();
  };

  render() {
    const { products } = this.props;
    return (
      <Container>
        <Heading>All Products</Heading>
        <ProductsContainer>
          {Array.isArray(products) && products.length > 0
            ? products.map((product, index) => (
                <ProductCard key={index}>
                  <ProductImg src={product.imgUrl} />
                  <ProductName>{product.name}</ProductName>
                  <SubText>{product.category}</SubText>
                  <Button onClick={(e) => this.onClickPay(product, e)}>{`Pay ${product.price}`}</Button>
                </ProductCard>
              ))
            : null}
        </ProductsContainer>
      </Container>
    );
  }
}

function mapStateToProps({ productsReducer }) {
  return {
    products: productsReducer.products
  };
}

export default withRouter(connect(mapStateToProps)(Products));
