import { useState } from 'react';
import ProductList from '../components/ProductList';
import axios from '../utils/axios';
import { Product } from '../utils/types';

export default function App() {
    const [company, setCompany] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [topN, setTopN] = useState<number>(10);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(1000);
    const [products, setProducts] = useState<Product[] | []>([]);

    // MOCK : Uncomment below code to test the UI
    // const [products, setProducts] = useState<Product[] | []>([
    //     {
    //         "productName": "Laptop 8",
    //         "price": 511,
    //         "rating": 0.47,
    //         "discount": 87,
    //         "availability": "yes"
    //     },
    //     {
    //         "productName": "Laptop 1",
    //         "price": 211,
    //         "rating": 0.47,
    //         "discount": 87,
    //         "availability": "yes"
    //     },
    //     {
    //         "productName": "Laptop 8",
    //         "price": 5311,
    //         "rating": 0.47,
    //         "discount": 87,
    //         "availability": "out-of-stock"
    //     },
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
        <div className="mx-auto p-4 max-w-4xl">
            <div className="flex flex-col my-2 space-y-4">
                <div className="flex flex-wrap items-center space-x-4">
                    <div className="flex items-center">
                        <label htmlFor="company" className="mr-2">Company:</label>
                        <select id="company" value={company} onChange={(e) => setCompany(e.target.value)} className="border border-gray-300 rounded-md p-2">
                            <option value="">Select Company</option>
                            <option value="AMZ">AMZ</option>
                            <option value="FLP">FLP</option>
                            <option value="SNP">SNP</option>
                            <option value="MYN">MYN</option>
                            <option value="AZO">AZO</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="category" className="mr-2">Category:</label>
                        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="border border-gray-300 rounded-md p-2">
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
                </div>
                <div className="flex flex-wrap items-center space-x-4">
                    <div className="flex items-center">
                        <label htmlFor="topN" className="mr-2">Top N:</label>
                        <input
                            id="topN"
                            className="p-2 border border-gray-300 rounded-md w-1/3"
                            type="number"
                            value={topN}
                            onChange={(e) => setTopN(Number(e.target.value))}
                        />
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="minPrice" className="mr-2">Min Price:</label>
                        <input
                            id="minPrice"
                            className="p-2 border border-gray-300 rounded-md w-1/3"
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(Number(e.target.value))}
                        />
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="maxPrice" className="mr-2">Max Price:</label>
                        <input
                            id="maxPrice"
                            className="p-2 border border-gray-300 rounded-md w-1/3"
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                        />
                    </div>
                </div>
                <button
                    className="my-5 mx-auto py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
                    onClick={fetchProducts}
                >
                    Fetch Products
                </button>
            </div>
            {products.length > 0 && <ProductList products={products} />}
        </div>
    );
};
