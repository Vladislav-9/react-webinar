import React, {useCallback} from "react";
import propTypes from 'prop-types';
import {cn} from '@bem-react/classname'
import Input from "../../components/input";
import Textarea from "../../components/textarea";
import Select from "../../components/select";
import './styles.css';


function ArticleForm({fields, countries, categories, onChange, onSubmit, error}){

  const className = cn('ArticleForm');

  const handleChange = useCallback((name) => {
    return (value) => onChange(name, value);
  }, [onChange]);

  return (
    <form className={className()} onSubmit={onSubmit}>
      <div className={className("Item")}>
        <label className={className("Label")} >
          Название
        </label>
        <Input
          type="text"
          value={fields.title}
          onChange={handleChange('title')}
        />
      </div>
      <div className={className("Item")}>
        <label className={className("Label")}>
          Описание
        </label>
        <Textarea
          value={fields.description}
          onChange={handleChange('description')}
        />
      </div>
      <div className={className("Item")}>
        <label className={className("Label")}>
          Страна производитель:
        </label>
        <Select
          onChange={handleChange('countryId')}
          value={fields.countryId}
          options={countries}
        />
      </div>
      <div className={className("Item")}>
        <label className={className("Label")}>
          Категория:
        </label>
        <Select
          onChange={handleChange('categoryId')}
          value={fields.categoryId}
          options={categories}
        />
      </div>
      <div className={className("Item")}>
        <label className={className("Label")}>
          Год выпуска:
        </label>
        <Input
          type="number"
          value={fields.edition}
          onChange={handleChange('edition')}
        />
      </div>
      <div className={className("Item")}>
        <label className={className("Label")}>
          Цена (₽)
        </label>
        <Input
          type="number"
          value={fields.price}
          onChange={handleChange('price')}
        />
      </div>
      <div className={className("Error")}>
        {error}
      </div>
      <button type="submit">Сохранить</button>
    </form>
  );
}

ArticleForm.propTypes = {
  fields: propTypes.object.isRequired,
  countries: propTypes.arrayOf(propTypes.object),
  categories: propTypes.arrayOf(propTypes.object),
  onChange: propTypes.func,
  onSubmit: propTypes.func,
  error: propTypes.string
}

ArticleForm.defaultProps = {
  fields: {},
  countries: [],
  categories: [],
  onChange: () => {},
  onSubmit: () => {},
  error: ''
}

export default React.memo(ArticleForm);
