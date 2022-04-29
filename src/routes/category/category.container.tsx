import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionLoading } from '../../store/product/product.selector'
import WidthSpinner from '../../components/spinner/spinner.component'
import CollectionPage from './category.component'

const mapStateToProps = createStructuredSelector({
  isLoading: state => selectIsCollectionLoading(state),
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WidthSpinner
)(CollectionPage)

export default CollectionPageContainer
