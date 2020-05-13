import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selecrCollectionsForPreview } from '../../redux/shop/shop.selector';

import './collections-overview.styles.scss';

function CollectionsOverview({ collections }) {
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherProps }) => (
				<CollectionPreview key={id} {...otherProps} />
			))}
		</div>
	);
}
const mapStatetoProps = createStructuredSelector({
	collections: selecrCollectionsForPreview,
});
export default connect(mapStatetoProps)(CollectionsOverview);
