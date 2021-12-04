import React from 'react';
import propTypes from 'prop-types';
import './styles.css';
import CartItem from "../cartItem";

function Cart({display, onDisplay, carts, totalCount, totalPrice}) {
 
  const totalPriceString = totalPrice.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

  return (
    <div className={'Cart' + (display ? '' : ' Cart_hidden')}>
      <div className='Cart_header'>
        <h1 className='Cart_title'>Корзина</h1>
        <button onClick={onDisplay}>Закрыть</button>
      </div>
      <ul className='Cart_list'>
        {carts.map(
          (item, index) => <CartItem item={item} key={item.code} index={index + 1}/>
        )}
      </ul>
      <div className='Cart_total'>
        <div className='Cart_total-title'>Итого</div>
        <div className='Cart_total-sum'>{`${totalPriceString} \u20bd`}</div>
        <div className='Cart_total-count'>{`${totalCount} шт`}</div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  carts: propTypes.arrayOf(propTypes.object).isRequired
}

Cart.defaultProps = {
  carts: []
}

export default React.memo(Cart);