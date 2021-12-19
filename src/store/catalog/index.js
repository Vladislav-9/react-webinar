import StoreModule from "../module";

class CatalogStore extends StoreModule {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      items: [],
      count: 0,
      limit: null,
      currentPage: null
    };
  }

  /**
   * Загрузка списка товаров
   */
  async load(pageIndex = 1, limit = 10) {
    let request = `/api/v1/articles?limit=${limit}&skip=${(pageIndex - 1) * limit}&fields=items(*),count`;
    const response = await fetch(request);
    const json = await response.json();
    this.setState({
      currentPage: pageIndex,
      items: json.result.items,
      count: json.result.count,
      limit: limit
    });
  }
}

export default CatalogStore;
