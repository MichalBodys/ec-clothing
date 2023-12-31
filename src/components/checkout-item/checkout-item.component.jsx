import { ReactComponent as LeftArr } from '../../assets/chevron-left.svg';
import { ReactComponent as RightArr } from '../../assets/chevron-right.svg';
import { ReactComponent as Cancel } from '../../assets/x.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss'

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

  const addCartItemHandler = () => addItemToCart(item)
  const removeItemHandler = () => removeItemFromCart(item)
  const clearItemHandler = () => clearItemFromCart(item)

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addCartItemHandler} >
          &#10095;
        </div>
      </span>
      <span className='price'>{price} $</span>
      <Cancel className='remove-button' onClick={clearItemHandler}/>
    </div>
  );
};

export default CheckoutItem;
