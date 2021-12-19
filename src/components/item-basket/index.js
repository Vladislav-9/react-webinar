import React, {useCallback} from "react";
import propTypes from 'prop-types';
import numberFormat from "../../utils/number-format";
import {Link} from "react-router-dom";
import './styles.css';
import useStore from "../../utils/use-store";

function ItemBasket({item}) {

  const store = useStore();

  const callbacks = {
    closeModal: useCallback(() => store.modals.close(), [store]),
  }

  return (
    <div className='ItemBasket'>
      <div className='ItemBasket__number'>{item._key}</div>
      <Link to={`/items/${item._id}`} className='ItemBasket__title' onClick={callbacks.closeModal}>{item.title}</Link>
      <div className='ItemBasket__right'>
        <span className="ItemBasket__cell">{numberFormat(item.price || 0)} ₽</span>
        <span className="ItemBasket__cell">{numberFormat(item.amount || 0)} шт</span>
      </div>
    </div>
  )
}

ItemBasket.propTypes = {
  item: propTypes.object.isRequired,
}

ItemBasket.defaultProps = {

}

export default React.memo(ItemBasket);
