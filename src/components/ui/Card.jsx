import { Link } from 'react-router-dom';

const Card = ({ product, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow ${className}`}>
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.imageURL}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.isNew && (
          <span className="absolute top-2 right-2 bg-dragon-red text-white px-3 py-1 rounded-full text-sm">
            New
          </span>
        )}
      </div>
      {product.discount && (
  <span className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
    -{product.discount}%
  </span>
)}

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-dragon-red mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>

        {/* Price and CTA */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-dragon-red">
            {product.price} ₾
          </span>
          <Link
            to={`/products/${product.id}`}
            className="bg-dragon-red text-white px-4 py-2 rounded-full hover:bg-red-800 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;