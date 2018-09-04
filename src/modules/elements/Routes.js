import React from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

const ProductsChunk = Loadable({
  loader: () => import("./product/Product"),
  loading: () => null
});

const CategoryChunk = Loadable({
  loader: () => import("./category/Category"),
  loading: () => null
});

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/elements/products" component={ProductsChunk} />
        <Route path="/elements/category" component={CategoryChunk} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
