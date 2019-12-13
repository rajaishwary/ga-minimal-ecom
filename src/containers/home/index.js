import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "../../components/header";
import { getFeConfigs } from "../../modules/fe-config";

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
        <div>Home</div>
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
