import React, {useCallback} from 'react';
import Controls from "./components/controls";
import List from "./components/list";
import Layout from "./components/layout";

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({store}) {
  console.log('App');

  const callbacks = {
    onCreateItem: useCallback(() => store.createItem(), [store]),
    onSelectItem: useCallback((code) => store.selectItem(code), [store]),
    onDeleteItem: useCallback((code) => store.deleteItem(code), [store])
  }

  return (
<<<<<<< HEAD
    <div className='App'>
      <div className='App__head'>
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className='Controls'>
        <button onClick={() => store.createItem()}> Добавить</button>
      </div>
      <div className='App__center'>
        <div className='List'>{store.getState().items.map(item =>
          <div
            key={item.code}
            className={'List__item' + (item.selected ? ' List__item_selected' : '')}
          >
            <div className='Item' onClick={() => store.selectItem(item.code)}>
            <div className='Item__number'>{item.code}</div>
              <div className='Item__title'>{item.title}{item.countClick > 0 && (<span> | Выделялся {item.countClick} раз </span>)}</div>
              <div className='Item__actions'>
                <button onClick={() => store.deleteItem(item.code)}>
                  Удалить
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
=======
    <Layout head={<h1>Приложение на чистом JS</h1>}>
      <Controls onCreate={callbacks.onCreateItem}/>
      <List items={store.getState().items}
            onSelectItem={callbacks.onSelectItem}
            onDeleteItem={callbacks.onDeleteItem}/>
    </Layout>
>>>>>>> lecture-2
  );
}

export default App;