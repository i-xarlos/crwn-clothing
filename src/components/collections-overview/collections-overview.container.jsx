import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../state/shop/shop.selector';
import WidthSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WidthSpinner,
)(CollectionsOverview);

export default CollectionsOverviewContainer;
