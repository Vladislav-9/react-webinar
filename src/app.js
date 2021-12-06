import React, {useState, useCallback} from 'react';
import Controls from "./components/controls";
import List from "./components/list";
import Layout from "./components/layout";
import Cart from "./components/cart";

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({store}) {
  console.log('App');

  const [displayCart, setDisplayCart] = useState(false);

  const onDisplayCart = () => {
    setDisplayCart(!displayCart);
  }

  const callbacks = {
    onAddToCart: useCallback((item) => store.addItemToCart(item), [store])
  }

  return (
    <Layout head={<h1>Магазин</h1>}>
      <Controls 
        onDisplay={onDisplayCart}
        totalPrice={store.totalCartPrice()}
        totalCount={store.totalCartCount()}
      />
      <List items={store.getState().items}
        onAddToCart={callbacks.onAddToCart}
      />
      <Cart 
        display={displayCart}
        carts={store.getState().carts}
        totalPrice={store.totalCartPrice()}
        totalCount={store.totalCartCount()}
        onDisplay={onDisplayCart}/>
    </Layout>
  );
}

export default App;