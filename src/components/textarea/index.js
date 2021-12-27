import React, {useCallback, useEffect, useState} from 'react';
import propTypes from "prop-types";
import {cn} from '@bem-react/classname';
import throttle from "lodash.throttle";
import './styles.css';


function Textarea(props) {

  const [value, change] = useState(props.value);

  const changeThrottle = useCallback(throttle(value => props.onChange(value), 1000), [props.onChange]);

  const onChange = useCallback(event => {
    change(event.target.value);
    changeThrottle(event.target.value);
  }, [change, changeThrottle]);

  useEffect(() => {
    change(props.value);
  }, [props.value]);

  const className = cn('Textarea');

  return (
    <textarea
      className={className({theme: props.theme})}
      value={value}
      placeholder={props.placeholder}
      name={props.name}
      onChange={onChange}
    />
  )
}

Textarea.propTypes = {
  value: propTypes.string,
  placeholder: propTypes.string,
  onChange: propTypes.func,
  theme: propTypes.string,
}

Textarea.defaultProps = {
  onChange: () => {},
  type: 'text',
  theme: ''
}

export default React.memo(Textarea);
