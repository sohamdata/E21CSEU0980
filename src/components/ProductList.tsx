interface Product {
    productName: string;
    price: number;
    rating: number;
    discount: number;
    availability: string;
}

interface Props {
    products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
    return (
        <div>
            <h2 className="text-lg font-bold mb-4">Product List</h2>
            <ul>
                {products?.map((product, index) => (
                    <li key={index} className="mb-2">
                        <div>{product?.productName}</div>
                        <div>Price: ${product?.price}</div>
                        <div>Rating: {product?.rating}</div>
                        <div>Discount: {product?.discount}%</div>
                        <div>Availability: {product?.availability}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
