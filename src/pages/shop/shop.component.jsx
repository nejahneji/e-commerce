import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collectionOverview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import { firestore , convertCollectionsSnapshoToMap } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import updateCollections from "../../redux/shop/shop.actions";

import "./shop.styles.scss";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot =null ;
  componentDidMount(){
     const {updateCollections} = this.props
       const collectionRef =firestore.collection('collections')
       collectionRef.onSnapshot( async snapshot => {
      const collectionMap=  convertCollectionsSnapshoToMap(snapshot)
      updateCollections(collectionMap)
       })
      
   }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToProps)(ShopPage);
