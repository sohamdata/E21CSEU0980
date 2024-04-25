import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './pages/List';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
