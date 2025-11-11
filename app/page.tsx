"use client";

import shopData from "./data.json";
import ProductSection from "./components/ProductSection";
import ShopsList from "./components/ShopsList";

type Shop = {
  shop_name: string;
  price: number;
  shopUrl: string;
  delivery: number;
};

export default function Home() {
  const handleShopClick = (shop: Shop) => {
    alert(
      `Shop: ${shop.shop_name}\nPrice: $${shop.price}\nDelivery: $${shop.delivery}\nURL: ${shop.shopUrl}`,
    );
  };

  const minPrice = Math.min(...shopData.map((s) => s.price));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <main className="max-w-6xl mx-auto">
        <ProductSection
          imageSrc="/ps5.webp"
          imageAlt="PlayStation 5"
          title="PlayStation 5"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
          minPrice={minPrice}
          shopCount={shopData.length}
        />
        <ShopsList shops={shopData} onShopClick={handleShopClick} />
      </main>
    </div>
  );
}
