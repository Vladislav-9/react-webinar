/**
 * Хранилище состояния приложения
 */
class Store {

  /**
   * @param modules {Object} Классы StoreModule для создания экземпляров модулей хранилища
   */
  constructor(modules = {}) {
    // Состояние приложения (данные всех модулей)
    this.state = {};
    // Подписчики на изменение state
    this.listners = [];

    // Модули
    this.modules = {};
    const names = Object.keys(modules);
    for (const name of names) {
      // Экземпляр модуля
      this.modules[name] = new modules[name](this, name);
      // Состояние по умочланию от модуля
      this.state[name] = this.modules[name].initState();
    }
  }

  /**
   * Подписка на изменение state
   * @param callback {Function}
   */
  subscribe(callback) {
    this.listners.push(callback);
    // Возвращаем функцию для отписки
    return () => {
      this.listners = this.listners.filter(item => item !== callback);
    }
  }

  /**
   * Выбор state
   * @return {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка state
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Оповещаем всех подписчиков об изменении стейта
    for (const lister of this.listners) {
      lister(this.state);
    }
  }

  /**
   * Доступ к модулю состояния
   * @param name {String} Название модуля
   * @return {StoreModule}
   */
  get(name){
    return this.modules[name];
  }


  /**
   * @return {BasketStore}
   */
  get basket(){
    return this.get('basket');
  }

  /**
   * @return {ModalsStore}
   */
  get modals(){
    return this.get('modals');
  }

  /**
   * @return {CatalogStore}
   */
  get catalog(){
    return this.get('catalog');
  }

  addItemToCart(item) {
    if (!this.state.carts.find(cartItem => cartItem.code === item.code)) {
      this.setState({
        items: this.state.items,
        carts: this.state.carts.concat({
          ...item,
          count: 1
        }),
      });
    } else {
      this.setState({
        items: this.state.items,
        carts: this.state.carts.map(cartItem => {
          if (cartItem.code === item.code) {
            return {
              ...item,
              count: cartItem.count + 1,
            };
          }
          return cartItem;
        }),
      });
    }
  }



  totalCartPrice() {
    let totalPrice = 0;
    this.state.carts.forEach(cartItem => {
      totalPrice += cartItem.price * cartItem.count;
    });
    return totalPrice;
  }

  totalCartCount() {
    let totalCount = 0;
    this.state.carts.forEach(cartItem => {
      totalCount += cartItem.count;
    });
    return totalCount;
  }
  
  counterItem(item) {
    if (!item.selected) {
      if (typeof(item.counter) === 'undefined') item.counter = 0;
      item.counter++;
    }
    return item.counter;
  }


}

export default Store;