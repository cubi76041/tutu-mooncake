import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import routes from '../../routes';

const Router = () => {
  return (
    <Switch>
      {routes.map(route => {
        const { component, render, path: routePath, exact } = route;

        const ChildComponent = () => component || render || <PageNotFound />;

        return (
          <Route
            path={routePath}
            exact={exact === undefined ? true : exact}
            key={routePath}
          >
            <ChildComponent />
          </Route>
        );
      })}
      <Route component={() => <PageNotFound />} />
    </Switch>
  );
};

export default Router;
