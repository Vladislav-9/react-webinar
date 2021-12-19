import React from 'react';
import Main from "./main";
import Basket from "./basket";
import useSelector from "../utils/use-selector";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Item from "./item";

/**
 * Приложение
 */
function App() {

  const select = useSelector(state => ({
    name: state.modals.name
  }));

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path="/items/:itemId" element={<Item/>} />
      </Routes>
     {select.name === 'basket' && <Basket/>}
   </BrowserRouter>
  );
}

export default React.memo(App);
