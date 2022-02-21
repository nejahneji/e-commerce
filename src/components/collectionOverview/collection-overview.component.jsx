import React from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview, selectShopCollections } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../preview-collection/Collection-preview";
import "./collection-overview.styles.scss";






const CollectionOverview = ({collections }) => {
  //  const collections = useSelector((state) => state.shop.collections)
  console.log(collections)
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
