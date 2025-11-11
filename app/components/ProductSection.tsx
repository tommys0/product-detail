import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

export default function ProductSection({ imageSrc, imageAlt, title, description, minPrice, shopCount }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <ProductImage src={imageSrc} alt={imageAlt} />
        <ProductInfo
          title={title}
          description={description}
          minPrice={minPrice}
          shopCount={shopCount}
        />
      </div>
    </div>
  );
}
