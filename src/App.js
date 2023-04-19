
import './App.css';
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Flex from './componentes/Flex/Flex';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

  
function App() {
  return (
    <BrowserRouter>
     
      <Navbar />

      <Routes>
       
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
        <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={ <p>404</p> }  /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

