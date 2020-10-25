import React, { Component } from "react";
import _ from "lodash";
import { Route, Switch, Redirect, routerRedux, withRouter } from "dva/router";
import PropTypes from "prop-types";

import AppSwitch from "./routes/AppSwitch";
import Index from "./routes/Index";


const { ConnectedRouter } = routerRedux;

class Root extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return children;
  }
}

const RouterRoot = withRouter(_.flow()(Root));

export default props => {
  return (
    <ConnectedRouter history={props.history}>
      <RouterRoot {...props}>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/index" />} />
          <AppSwitch>
            <Route path="/index" exact component={Index} />
          </AppSwitch>
        </Switch>
      </RouterRoot>
    </ConnectedRouter>
  );
};
