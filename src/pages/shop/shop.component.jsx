import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collectionOverview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

import "./shop.styles.scss";

const ShopPage = ({match}) => {
    // console.log(match.path)
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
