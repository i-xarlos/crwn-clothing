import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionLoading } from '../../store/product/product.selector'
import Spinner from '../spinner/spinner.component'
import CategoryPreview from './category-preview.component'
import { compose } from 'redux'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionLoading,
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CategoryPreview)

export default CollectionsOverviewContainer
