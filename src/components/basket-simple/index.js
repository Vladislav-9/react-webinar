import React from 'react';
import propTypes from 'prop-types';
import plural from "plural-ru";
import numberFormat from "../../utils/number-format";
import {Link} from "react-router-dom";
import './styles.css';

function BasketSimple({sum, amount, onOpen}) {
  return (
    <div className='BasketSimple'>
      <Link to='/' className='BasketSimple__main-link'>Главная</Link>
      <span className="BasketSimple__label">В корзине:</span>
      <span className="BasketSimple__total">
      {amount
        ? `${amount} ${plural(amount, 'товар', 'товара', 'товаров')} / ${numberFormat(sum)} ₽`
        : `пусто`
      }
      </span>
      <button className='BasketSimple__button' onClick={onOpen}>Перейти</button>
    </div>
  )
}

BasketSimple.propTypes = {
  onOpen: propTypes.func.isRequired,
  sum: propTypes.number,
  amount: propTypes.number
}

BasketSimple.defaultProps = {
  onOpen: () => {},
  sum: 0,
  amount: 0
}

export default React.memo(BasketSimple);