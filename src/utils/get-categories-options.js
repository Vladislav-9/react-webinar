export default function getCategoriesOptions(categories, prefixAmount = 0){

  let result = [];

  for (let category of categories) {
    result.push({value: category._id, title: '- '.repeat(prefixAmount) + category.title});
    if (category.children.length > 0) {
      let children = getCategoriesOptions(category.children, prefixAmount + 1);
      for (let child of children) {
        result.push(child);
      }
    }
  }

  return result;
}
