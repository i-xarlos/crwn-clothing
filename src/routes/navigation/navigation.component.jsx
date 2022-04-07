import { useSelector } from 'react-redux'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import { Outlet } from 'react-router-dom'
import Logo from '../../assets/images/logo.gif'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  Container,
} from './navigation.styles'

function Navigation() {
  const {
    user: { currentUser },
    cart: { hidden },
  } = useSelector(state => state)

  const handleSignOut = async () => {
    await signOutUser()
  }

  return (
    <Container>
      <HeaderContainer className='navigation' alt='Header'>
        <LogoContainer to='/'>
          <img src={Logo} alt='Ixarlos / store' /> <span>[ STORE ]</span>
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
        {hidden && <CartDropdown />}
      </HeaderContainer>
      <Outlet />
    </Container>
  )
}

export default Navigation
