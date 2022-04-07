import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../../store/product/product.selector'
import WidthSpinner from '../with-spinner/with-spinner.component'
import CategoryPreview from './category-preview.component'
import { compose } from 'redux'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WidthSpinner
)(CategoryPreview)

export default CollectionsOverviewContainer
