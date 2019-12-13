import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFeConfigs } from "../../modules/fe-config";
import Banners from "../../components/banner";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getFeConfigs());
  }

  render() {
    console.log(this.props);
    return (
      <>
        <Banners banners={this.props.banners} />
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
  
  export default withRouter(connect(mapStateToProps)(Home));
