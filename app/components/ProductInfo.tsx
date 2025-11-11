export default function ProductInfo({ title, description, minPrice, shopCount }) {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-lg">{description}</p>
      <div className="space-y-2">
        <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
          Starting from ${minPrice.toFixed(2)}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {shopCount} shops available
        </p>
      </div>
    </div>
  );
}
