"use client";

import ShopCard from "./ShopCard";

export default function ShopsList({ shops, onShopClick }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Available at these shops
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shops.map((shop, index) => (
          <ShopCard key={index} shop={shop} onClick={onShopClick} />
        ))}
      </div>
    </div>
  );
}
