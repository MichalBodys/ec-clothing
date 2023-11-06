import { Outlet, } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../contexts/cart.context';
import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles';


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen } = useContext(CartContext);


  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo></CrwnLogo>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            Shop
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
          {currentUser ? (
            <span onClick={signOutUser} className="nav-link">
              Sign out
            </span>
          ) : (
            <NavLink to="/auth">
              Sign in
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
       { isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
