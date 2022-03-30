import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../state/shop/shop.selector';
import WidthSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectIsCollectionLoaded(state),
});

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WidthSpinner,
)(CollectionPage);

export default CollectionPageContainer;
