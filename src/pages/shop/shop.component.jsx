import React from 'react';
import { Route } from 'react-router-dom';
import { fetchCollectionsStartAsync } from '../../state/shop/shop.actions';
import { connect } from 'react-redux';

import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

class ShopPage extends React.Component {
	componentDidMount() {
		const { doFetchCollectionsStartAsync } = this.props;
		doFetchCollectionsStartAsync();
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	doFetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
