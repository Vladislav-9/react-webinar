import React, {useCallback, useState} from "react";
import propTypes from 'prop-types';
import './styles.css';

function Item({item, onAddToCart}){
  console.log('Item', item.title);

  const price = item.price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

  return (
    <div className='Item'>
      <div className='Item_number'>{item.code}</div>
      <div className='Item_title'>{item.title}</div>
      <div className='Item_price'>{`${price} \u20bd`}</div>
      <div className='Item_actions'>
        <button onClick={() => onAddToCart(item)}>
          Добавить
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: propTypes.object.isRequired,
  onAddToCart: propTypes.func.isRequired
}

Item.defaultProps = {
  onAddToCart: () => {}
}

export default React.memo(Item);