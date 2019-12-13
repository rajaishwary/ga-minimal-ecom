import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProducts } from "../../modules/products";

class Products extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getProducts());
  }


  render() {
    console.log(this.props.products);
    return (
      <>
        <div>Products</div>
      </>
    );
  }
}

function mapStateToProps({ productsReducer, configReducer }) {
    return {
        products: productsReducer.products,
        banners: configReducer.banners
    };
  }
  
  export default withRouter(connect(mapStateToProps)(Products));
