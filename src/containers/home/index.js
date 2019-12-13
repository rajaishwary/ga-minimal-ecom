import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.props.products);
    return (
      <div>
          Home
      </div>
    );
  }
}

function mapStateToProps({ productsReducer, configReducer }) {
    return {
        products: productsReducer.products,
        banners: configReducer.banners
    };
  }
  
  export default withRouter(connect(mapStateToProps)(Home));
