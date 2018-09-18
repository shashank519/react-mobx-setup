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

const ManufacturerChunk = Loadable({
  loader: () => import("./manufacturer/Manufacturer"),
  loading: () => null
});

const BrandChunk = Loadable({
  loader: () => import("./brand"),
  loading: () => null
});

const ProductMasterChunk = Loadable({
  loader: () => import("./productMaster/Product"),
  loading: () => null
});

const UnitChunk = Loadable({
  loader: () => import("./unit"),
  loading: () => null
});

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route
          exact
          path="/admin/elements/products"
          component={ProductsChunk}
        />
        <Route
          exact
          path="/admin/elements/products-master"
          component={ProductMasterChunk}
        />
        <Route
          exact
          path="/admin/elements/category"
          component={CategoryChunk}
        />
        <Route
          exact
          path="/admin/elements/manufacturer"
          component={ManufacturerChunk}
        />
        <Route exact path="/admin/elements/brand" component={BrandChunk} />
        <Route exact path="/admin/elements/unit" component={UnitChunk} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
