import React from "react";
import './styles.css';

function Layout({head, content, children}){
  console.log('Layout');
  return (
    <div className='Layout'>
      <div className='Layout_head'>
        {head}
      </div>
      <div className='Layout_center'>
        {content || children}
      </div>
    </div>
  );
}

export default React.memo(Layout);