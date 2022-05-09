import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { selectHasCartItems } from '../../store/cart/cart.selectors'
import CartDropdown from './cart-dropdown.component'
import WidthSpinner from '../../components/spinner/spinner.component'

const mapStateToProps = createStructuredSelector({
  isLoading: selectHasCartItems,
})

const CartDropdownContainer = compose(
  connect(mapStateToProps),
  WidthSpinner
)(CartDropdown)

export default CartDropdownContainer
