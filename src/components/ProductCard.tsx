import { Product } from "../utils/types";

interface ProductCardProps {
    product: Product;
    onClick?: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 w-64" onClick={onClick}>
            <h3 className="text-lg font-semibold">{product.productName}</h3>
            <div className="text-gray-600 mb-2">Price: ${product.price}</div>
            <div className="text-gray-600 mb-2">Rating: {product.rating}</div>
            <div className="text-gray-600 mb-2">Discount: {product.discount}%</div>
            <div className="text-gray-600">Availability: {product.availability}</div>
        </div>
    );
};
