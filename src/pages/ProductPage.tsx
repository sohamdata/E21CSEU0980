import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function ProductPage() {
    const location = useLocation();
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        if (location.state && location.state.product) {
            setProduct(location.state.product);
        }
    }, [location.state]);

    return (
        <div className="mx-auto p-4 max-w-4xl">
            {product && <ProductCard product={product} />}
        </div>
    );
};
