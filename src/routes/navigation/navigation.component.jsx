import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { Outlet } from 'react-router-dom'
import Logo from '../../assets/images/logo.gif'
import { useNavigate } from 'react-router-dom'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  Container,
  MessageBox,
} from './navigation.styles'

import {
  selectCurrentUser,
  selectCurrentUserMessage,
  selectCurrentUserError,
} from '../../store/user/user.selectors'

import { selectCartHidden } from '../../store/cart/cart.selectors'
import { signOutUser } from '../../store/user/user.actions'

function Navigation() {
  const [toggleMessage, setToggleMessage] = useState(false)
  const currentUser = useSelector(selectCurrentUser)
  const hidden = useSelector(selectCartHidden)
  const message = useSelector(selectCurrentUserMessage)
  const error = useSelector(selectCurrentUserError)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (message.includes('successfully')) {
      setTimeout(() => {
        navigate('/')
      }, 1000)
    }
    if (message || error.message) showHideMessage()
  }, [message, error, navigate])

  const showHideMessage = () => {
    setToggleMessage(true)
    setTimeout(() => {
      setToggleMessage(false)
    }, 5000)
  }

  const handleSignOut = () => {
    dispatch(signOutUser())
  }

  const hasError = error.message ? true : false

  return (
    <Container>
      <MessageBox
        error={hasError}
        showMessage={(message || error.message) && toggleMessage}
      >
        {hasError ? '**' : ''} {message || error.message}
      </MessageBox>
      <HeaderContainer className='navigation' alt='Header'>
        <LogoContainer to='/'>
          <img src={Logo} alt='Ixarlos / store' /> <span>[ STORE ]</span>
        </LogoContainer>

        <OptionsContainer alt='OpitionsContainer'>
          <OptionLink to='/'>Home</OptionLink>
          <OptionLink to='/shop'>Shop</OptionLink>

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
