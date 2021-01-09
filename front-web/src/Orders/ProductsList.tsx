
import { checkIsSelected } from "./Helpers";
import ProductCard from "./ProductCard";
import { Product } from "./Types";


type Props = {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
    isSelected: boolean;
}

function ProductsList({ products, selectedProducts, onSelectProduct, isSelected }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onSelectProduct={onSelectProduct}
                        isSelected={checkIsSelected(selectedProducts, product)}  
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsList;