import StoreModule from "../module";

class CatalogStore extends StoreModule {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      items: [],
      count: 0,
      limit: 10
    };
  }

  /**
   * Загрузка списка товаров
   */
  async load(limit, skip = 0) {
    let request = `/api/v1/articles?limit=${limit}&skip=${skip}&fields=items(*),count`;
    const response = await fetch(request);
    const json = await response.json();
    this.setState({
      items: json.result.items,
      count: json.result.count,
      limit: limit
    });
  }
}

export default CatalogStore;
