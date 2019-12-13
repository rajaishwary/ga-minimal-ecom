import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle, AppContainer } from "./theme/globalStyles";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./configStore";
import Home from "./containers/home";

const store = configureStore();

const Root = ({ store }) => (
  <Provider store={store}>
    <AppContainer>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </AppContainer>
  </Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
serviceWorker.unregister();
