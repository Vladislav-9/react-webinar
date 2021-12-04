import React from "react";
import propTypes from 'prop-types';
import plural from 'plural-ru';
import './styles.css';

function Controls({onDisplay, totalPrice, totalCount}){
  console.log('Controls');

  const totalCountString = `${totalCount} ${plural(totalCount, 'товар', 'товара', 'товаров')}`;
  const totalPriceString = totalPrice.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');


  return (
  	<div className='Controls'>
  	  <p className='Controls_cart-info'>
      <span>В корзине:</span><strong>{ totalCount ? (`${totalCountString} / ${totalPriceString} \u20bd`) : 'пусто'}</strong>
     </p>
    <button className='Controls_btn' onClick={onDisplay}>Перейти</button>
  </div>
 );
}

Controls.propTypes = {
  onDisplay: propTypes.func.isRequired
}

Controls.defaultProps = {
  onDisplay: () => {}
}

export default React.memo(Controls);