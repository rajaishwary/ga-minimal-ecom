import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle, AppContainer, Container } from "./theme/globalStyles";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./configStore";
import Header from "./components/header";
import Home from "./containers/home";
import Products from "./containers/products";

const store = configureStore();

const Root = ({ store }) => (
  <Provider store={store}>
    <AppContainer>
      <GlobalStyle />
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
          </Switch>
        </Container>
      </Router>
    </AppContainer>
  </Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
serviceWorker.unregister();
