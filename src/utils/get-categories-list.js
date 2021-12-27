export default function getCategoriesList(categories, parentId = null){

  let result = [];

  for (let category of categories) {
    let categoryParentId = category.parent ? category.parent._id : null;

    if (categoryParentId == parentId) {
      result.push(category);
      category.children = getCategoriesList(categories, category._id);
    }
  }

  return result;
}
