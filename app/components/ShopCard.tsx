"use client";

type Shop = {
  shop_name: string;
  price: number;
  shopUrl: string;
  delivery: number;
};

export default function ShopCard({ shop, onClick }: { shop: Shop; onClick: (shop: Shop) => void }) {
  return (
    <button
      onClick={() => onClick(shop)}
      className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 hover:shadow-lg transition-all duration-200 text-left"
    >
      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
        {shop.shop_name}
      </h3>
      <div className="space-y-1">
        <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          ${shop.price.toFixed(2)}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Delivery: {shop.delivery === 0 ? "FREE" : `$${shop.delivery}`}
        </p>
      </div>
    </button>
  );
}
