import React from "react";
import propTypes from 'prop-types';
import plural from 'plural-ru';
import './styles.css';

function Controls({onCreate}){
  return <div className='Controls'>
    <button onClick={onCreate}> Добавить</button>
  </div>
 );
}

Controls.propTypes = {
  onDisplay: propTypes.func.isRequired
}

Controls.defaultProps = {
  onDisplay: () => {}
}

export default React.memo(Controls);