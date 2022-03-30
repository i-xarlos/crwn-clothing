import { useContext } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as Logo } from '../../assets/svg/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { signOutUser } from '../../config/firebase/firebase.utils'

import { Outlet } from 'react-router-dom'

import { selectCartHidden } from '../../state/cart/cart.selectors'
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  Container,
} from './navigation.styles'

import { UserContext } from '../../context/user.context'

function Header({ hidden }) {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const handleSignOut = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

  return (
    <Container>
      <HeaderContainer className='navigation' alt='Header'>
        <LogoContainer to='/'>
          <Logo />
        </LogoContainer>

        <OptionsContainer alt='OpitionsContainer'>
          <OptionLink to='/'>Home</OptionLink>
          <OptionLink to='/shop'>Shop</OptionLink>
          <OptionLink to='/contact'>Contact</OptionLink>

          {currentUser ? (
            <>
              <OptionLink as='div'>Hi!, {currentUser.displayName}</OptionLink>
              <OptionLink as='div' onClick={handleSignOut}>
                sign out
              </OptionLink>
            </>
          ) : (
            <OptionLink to='/auth'>SIGN IN</OptionLink>
          )}
          <CartIcon />
        </OptionsContainer>
        {hidden || <CartDropdown />}
      </HeaderContainer>
      <Outlet />
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
