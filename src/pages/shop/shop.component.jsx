import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';

class ShopPage extends React.Component {
	unsubscribeFromSnapshot = null;
	componentDidMount() {
		const { doUpdateCollections } = this.props;
		const collectionRef = firestore.collection('collections');

		collectionRef.onSnapshot(async (snapshot) => {
			const collectionMap = convertCollectionsSnapshotToMap(snapshot);
			//console.log(collectionMap);
			doUpdateCollections(collectionMap);
		});
	}
	componentWillUnmount() {}
	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverview}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPage}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	doUpdateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
