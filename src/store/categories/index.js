import StoreModule from "../module";
import getCategoriesOptions from "../../utils/get-categories-options";
import getCategoriesList from "../../utils/get-categories-list";

class CategoriesStore extends StoreModule {
  /**
   * Начальное состояние
   */
  initState() {
    return {
      items : [],
    };
  }

  async init(){
    const res = await fetch(`api/v1/categories?limit=*&fields=_id,parent,title`);
    const json = await res.json();

    const categoriesList = getCategoriesList(json.result.items);
    const categoriesOptions = getCategoriesOptions(categoriesList);

    this.setState ({
      items: categoriesOptions
    });
  }
}

export default CategoriesStore;


