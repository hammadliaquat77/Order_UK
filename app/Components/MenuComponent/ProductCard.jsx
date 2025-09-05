import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <Image 
          src={product.image} 
          alt={product.name} 
          layout="fill" 
          objectFit="cover" 
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold text-white">{product.name}</h4>
        <p className="text-orange-400 font-bold mt-2">£{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;