// src/sections/Products.jsx

import ProductImages from "../Component/ProductImages";
import ProductContent from "../Component/ProductContent";

const ProductFeature = () => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <ProductImages />
          <ProductContent />
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;
