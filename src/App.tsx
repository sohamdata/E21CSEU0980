import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './pages/List';
import ProductPage from './pages/ProductPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="/product/:productName" element={<ProductPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
