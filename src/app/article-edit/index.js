import React, {useCallback} from "react";
import useInit from "../../utils/use-init";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";
import {useParams} from "react-router-dom";
import Layout from "../../components/layout";
import Header from "../../containers/header";
import Spinner from "../../components/spinner";
import ArticleForm from "../../components/article-form";

function ArticleEdit() {

  const store = useStore();
  // Параметры из пути
  const params = useParams();

  // Начальная загрузка
  useInit(async () => {
    await store.get('articleEdit').init(params.id);
    await store.get('categories').init();
    await store.get('countries').init();
  }, [params.id]);

  const select = useSelector(state => ({
    waiting: state.articleEdit.waiting,
    article: state.articleEdit.data,
    fields: state.articleEdit.fields,
    countries: state.countries.items,
    categories: state.categories.items,
    error: state.articleEdit.error
  }));


  const callbacks = {
    onSubmit: useCallback(event => store.articleEdit.submit(event), [store]),
    onChange: useCallback((name, value) => store.articleEdit.update(name, value), [store]),
  }
  return (
    <Layout head={<h1>{select.article.title}</h1>}>
      <Header/>
      <Spinner active={select.waiting}>
        <ArticleForm
          fields={select.fields}
          countries={select.countries}
          categories={select.categories}
          onChange={callbacks.onChange}
          onSubmit={callbacks.onSubmit}
          error={select.error}
        />
      </Spinner>
    </Layout>
  );
}

export default React.memo(ArticleEdit);
