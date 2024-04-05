const ProductCardBtn = ({productId, handleProductSelect}) => <button 
    className="outline"
    onClick={() => handleProductSelect(productId)}
    >Seç {productId}
</button>

export default ProductCardBtn