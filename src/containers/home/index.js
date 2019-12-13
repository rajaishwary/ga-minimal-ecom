import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFeConfigs, getPopularProducts } from "../../modules/fe-config";
import Banners from "../../components/banner";
import { ProductsContainer, ProductCard, ProductImg, ProductName, SubText, Heading } from "./styles";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getFeConfigs());
    this.props.dispatch(getPopularProducts());
  }

  render() {
    const { popularProducts } = this.props;
    return (
      <>
        <Banners banners={this.props.banners} />
        <>
          <Heading>{"Popular Products"}</Heading>
          <ProductsContainer>
            {popularProducts.map((product, index) => {
              return (
                <ProductCard key={index}>
                  <ProductImg src={product.imgUrl} />
                  <ProductName>{product.name}</ProductName>
                  <SubText>{product.category}</SubText>
                </ProductCard>
              );
            })}
          </ProductsContainer>
        </>
      </>
    );
  }
}

function mapStateToProps({ configReducer }) {
  return {
    popularProducts: configReducer.popularProducts,
    banners: configReducer.banners
  };
}

export default withRouter(connect(mapStateToProps)(Home));
