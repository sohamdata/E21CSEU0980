import ProductCard from './ProductCard';
import { Product } from '../utils/types';
import { useNavigate } from 'react-router-dom';


interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    const navigate = useNavigate();

    const gotoProduct = (product: Product) => {
        navigate(`/product/${product.productName}`, {
            state: {
                product,
            },
        });
    }

    return (
        <div>
            <h2 className="text-lg font-bold mb-4">Product List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products?.map((product, index) => (
                    <ProductCard key={index} product={product} onClick={() => gotoProduct(product)} />
                ))}
            </div>
        </div>
    );
};
