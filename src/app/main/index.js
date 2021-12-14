import React, {useCallback, useEffect} from "react";
import Item from "../../components/item";
import Layout from "../../components/layout";
import BasketSimple from "../../components/basket-simple";
import List from "../../components/list";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";
import Pagination from "../../components/pagination";
import PaginationItem from "../../components/pagination-item";


function Main() {

  const select = useSelector(state => ({
    name: state.modals.name,
    items: state.catalog.items,
    amount: state.basket.amount,
    sum: state.basket.sum,
    count: state.catalog.count,
    limit: state.catalog.limit
  }));

  // Загрузка тестовых данных при первом рендере
  useEffect(async () => {
    await store.catalog.load(select.limit);
  }, []);

  const store = useStore();

  const callbacks = {
    addToBasket: useCallback((_id) => store.basket.add(_id), [store]),
    openModal: useCallback(() => store.modals.open('basket'), [store]),
    loadPageItems: useCallback((limit, skip) => {
      store.catalog.load(limit, skip);
    }, [store])
  }

  const pageAmount = Math.floor(select.count / select.limit) < (select.count / select.limit) ?
    Math.floor(select.count / select.limit) + 1 :
    select.count / select.limit;

  const renders = {
    item: useCallback(item => {
      return <Item item={item} onAdd={callbacks.addToBasket}/>
    }, [callbacks.addToBasket]),
    paginationItem: useCallback((index, currentIndex, setCurrentIndex) => {
      return <PaginationItem index={index} currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex} key={index}
        loadPageItems={callbacks.loadPageItems} limit={select.limit}/>
    }, [callbacks.loadPageItems])
  }

  return (
    <Layout head={<h1>Магазин</h1>}>
      <BasketSimple onOpen={callbacks.openModal} amount={select.amount} sum={select.sum}/>
      <List items={select.items} renderItem={renders.item}/>
      <Pagination pageAmount={pageAmount} renderPaginationItem={renders.paginationItem}/>
    </Layout>
  );
}

export default React.memo(Main);
