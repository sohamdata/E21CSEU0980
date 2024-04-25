import { useState } from 'react';
import ProductList from './components/ProductList';
import axios from './utils/axios';

export default function App() {
  const [company, setCompany] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [topN, setTopN] = useState<number>(10);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [products, setProducts] = useState<any[]>([]);

  // MOCK
  // const [products, setProducts] = useState<any[]>([
  //   {
  //     "productName": "Laptop 8",
  //     "price": 511,
  //     "rating": 0.47,
  //     "discount": 87,
  //     "availability": "yes"
  //   }
  // ]);


  const fetchProducts = async () => {
    console.log(company, category, topN, minPrice, maxPrice);
    if (company && category && topN !== 0 && minPrice !== 0 && maxPrice !== null) {
      try {
        const response = await axios.get(`/test/companies/${company}/categories/${category}/products?top=${topN}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
        console.log("resposne:::::::::::::::", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    } else {
      console.error('Please select all the filters');
    }
  };

  // Companies: "AMZ", "FLP", "SNP", "MYN", "AZO"
  // Categories: "Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"

  return (
    <div className="mx-auto p-4">
      <div className="flex flex-wrap items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <label htmlFor="company">Company:</label>
          <select id="company" value={company} onChange={(e) => setCompany(e.target.value)}>
            <option value="">Select Company</option>
            <option value="AMZ">AMZ</option>
            <option value="FLP">FLP</option>
            <option value="SNP">SNP</option>
            <option value="MYN">MYN</option>
            <option value="AZO">AZO</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="Phone">Phone</option>
            <option value="Computer">Computer</option>
            <option value="TV">TV</option>
            <option value="Earphone">Earphone</option>
            <option value="Tablet">Tablet</option>
            <option value="Charger">Charger</option>
            <option value="Mouse">Mouse</option>
            <option value="Keypad">Keypad</option>
            <option value="Bluetooth">Bluetooth</option>
            <option value="Pendrive">Pendrive</option>
            <option value="Remote">Remote</option>
            <option value="Speaker">Speaker</option>
            <option value="Headset">Headset</option>
            <option value="Laptop">Laptop</option>
            <option value="PC">PC</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="topN">Top N:</label>
          <input id="topN" type="number" value={topN} onChange={(e) => setTopN(Number(e.target.value))} />
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="minPrice">Min Price:</label>
          <input id="minPrice" type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} />
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="maxPrice">Max Price:</label>
          <input id="maxPrice" type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={fetchProducts}>Fetch Products</button>
      {products &&
        <ProductList products={products} />
      }
    </div>
  );
};
