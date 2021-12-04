import React from "react";
import propTypes from 'prop-types';
import './styles.css';

function CartItem({item, index}) {

 const price = item.price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

  return (
    <li className='Cart_item'>
      <div className={'Cart_left-wrapper'}>
        <div className='Cart_item-index'>{index}</div>
        <div className='Cart_item-name'>{item.title}</div>
      </div>
      <div className='Cart_right-wrapper'>
        <div className='Cart_item-price'>{`${price} \u20bd`}</div>
        <div className='Cart_item-count'>{`${item.count} шт.`}</div>
      </div>
    </li>
  );
}

CartItem.propTypes = {
 item: propTypes.object.isRequired
}


export default CartItem;