import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as Logo } from '../../assets/svg/crown.svg'
import { auth } from '../../config/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { Outlet } from 'react-router-dom'

import { selectCartHidden } from '../../state/cart/cart.selectors'
import { selectCurrentUser } from '../../state/user/user.selectors'
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './navigation.styles'

function Header({ currentUser, hidden }) {
  return (
    <>
      <HeaderContainer className='navigation' alt='Header'>
        <LogoContainer to='/'>
          <Logo />
        </LogoContainer>

        <OptionsContainer alt='OpitionsContainer'>
          <OptionLink to='/'>Home</OptionLink>
          <OptionLink to='/shop'>Shop</OptionLink>
          <OptionLink to='/contact'>Contact</OptionLink>

          {currentUser ? (
            <React.Fragment>
              <OptionLink as='div'>Hi!, {currentUser.displayName}</OptionLink>
              <OptionLink as='div' onClick={() => auth.signOut()}>
                sign out
              </OptionLink>
            </React.Fragment>
          ) : (
            <OptionLink to='/sign'>SIGN IN</OptionLink>
          )}
          <CartIcon />
        </OptionsContainer>
        {hidden || <CartDropdown />}
      </HeaderContainer>
      <Outlet />
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
