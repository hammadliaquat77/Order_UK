// "use client"
// import { useState, useEffect } from 'react';
// import { Search, ShoppingCart, Utensils, Pizza, Soup, EggFried, Sprout } from 'lucide-react';
// import Link from 'next/link';

// const products = [
//   { id: 1, name: 'Classic Beef Burger', price: 8.99, image: 'https://placehold.co/400x250/d1d5db/374151?text=Classic+Burger', category: 'Burgers' },
//   { id: 2, name: 'Supreme Pepperoni Pizza', price: 12.99, image: 'https://placehold.co/400x250/d1d5db/374151?text=Pepperoni+Pizza', category: 'Pizzas' },
//   { id: 3, name: 'Spicy Chicken Burger', price: 9.50, image: 'https://placehold.co/400x250/d1d5db/374151?text=Spicy+Chicken', category: 'Burgers' },
//   { id: 4, name: 'Margherita Pizza', price: 10.50, image: 'https://placehold.co/400x250/d1d5db/374151?text=Margherita+Pizza', category: 'Pizzas' },
//   { id: 5, name: 'Caesar Salad', price: 7.99, image: 'https://placehold.co/400x250/d1d5db/374151?text=Caesar+Salad', category: 'Salads' },
//   { id: 6, name: 'Garden Vegetable Salad', price: 8.50, image: 'https://placehold.co/400x250/d1d5db/374151?text=Garden+Salad', category: 'Salads' },
//   { id: 7, name: 'Chocolate Lava Cake', price: 6.99, image: 'https://placehold.co/400x250/d1d5db/374151?text=Lava+Cake', category: 'Desserts' },
//   { id: 8, name: 'Cheesecake', price: 5.99, image: 'https://placehold.co/400x250/d1d5db/374151?text=Cheesecake', category: 'Desserts' },
//   { id: 9, name: 'Grilled Salmon Salad', price: 14.99, image: 'https://placehold.co/400x250/d1d5db/374151?text=Salmon+Salad', category: 'Salads' },
//   { id: 10, name: 'Hawaiian Pizza', price: 11.99, image: 'https://placehold.co/400x250/d1d5db/374151?text=Hawaiian+Pizza', category: 'Pizzas' },
// ];

// const categoryIcons = {
//   'Burgers': <Utensils size={20} />,
//   'Pizzas': <Pizza size={20} />,
//   'Salads': <Sprout size={20} />,
//   'Desserts': <EggFried size={20} />,
// };

// // Main App component
// const Menu = () => {
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState(products);
//   const [cartMessage, setCartMessage] = useState('');

//   // Effect to filter products whenever categories or search term changes
//   useEffect(() => {
//     const updatedProducts = products.filter(product => {
//       // Filter by category
//       const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
//       // Filter by search term
//       const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//       return categoryMatch && searchMatch;
//     });
//     setFilteredProducts(updatedProducts);
//   }, [selectedCategories, searchTerm]);

//   // Handle checkbox change for filtering
//   const handleCategoryChange = (category) => {
//     setSelectedCategories(prev =>
//       prev.includes(category)
//         ? prev.filter(cat => cat !== category)
//         : [...prev, category]
//     );
//   };

//   // Handle adding an item to the cart and showing a message
//   const handleAddToCart = (productName) => {
//     setCartMessage(`${productName} added to cart!`);
//     setTimeout(() => setCartMessage(''), 2000); 
//   };

//   const allCategories = [...new Set(products.map(p => p.category))];

//   return (
//     <div className="bg-gray-100 min-h-screen font-inter p-4 sm:p-8 flex flex-col items-center">
//       <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row shadow-2xl rounded-3xl overflow-hidden mt-10">

//         {/* Section 1: Menu & Filters */}
//         <div className="w-full md:w-[280px] bg-zinc-800 p-8 text-white rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none flex-shrink-0">
//           <h1 className="text-3xl font-bold text-center mb-10 text-orange-400">Menu</h1>
          
//           <div className="space-y-6">
//             <span className="text-lg font-semibold block text-orange-100">Filter by Category</span>
//             <ul className="grid grid-cols-2 md:grid-cols-1 gap-4">
//               {allCategories.map(category => (
//                 <li key={category} className="flex items-center gap-3">
//                   <input
//                     type="checkbox"
//                     id={category}
//                     checked={selectedCategories.includes(category)}
//                     onChange={() => handleCategoryChange(category)}
//                     className="accent-orange-400 w-5 h-5 cursor-pointer rounded-full"
//                   />
//                   <label htmlFor={category} className="text-gray-200 text-lg cursor-pointer flex items-center gap-2">
//                     {categoryIcons[category]}
//                     <span>{category}</span>
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Section 2: Search & Product Cards */}
//         <div className="w-full bg-white p-8 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
//           {/* Search bar */}
//           <div className="flex items-center justify-center mb-10 w-full max-w-lg mx-auto">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 placeholder="Search for food..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full px-6 py-3 pr-12 text-gray-800 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//               <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
//             </div>
//           </div>

//           {/* Cart Message */}
//           {cartMessage && (
//             <div className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg z-50 transition-transform duration-300 animate-slide-up">
//               <div className="flex items-center gap-2">
//                 <ShoppingCart size={20} />
//                 <span>{cartMessage}</span>
//               </div>
//             </div>
//           )}

//           {/* Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map(product => (
//                 <div key={product.id} className="w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
//                   <div className="w-full h-44 overflow-hidden rounded-t-2xl">
//                     <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
//                   </div>
//                   <div className="p-5 flex flex-col gap-2">
//                     <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
//                     <p className="text-sm text-gray-600 line-clamp-2">A delicious {product.category.toLowerCase()} made with fresh ingredients.</p>
//                   </div>
//                   <div className="flex p-5 pt-0 justify-between items-center">
//                     <Link href="/Cart">
//                     <button
//                       onClick={() => handleAddToCart(product.name)}
//                       className="bg-orange-500 text-white px-4 py-2.5 rounded-full font-semibold text-sm shadow-md hover:bg-orange-600 transition-colors duration-300"
//                       >
//                       <span className="flex items-center gap-2">
//                         <ShoppingCart size={16} /> Add to Cart
//                       </span>
//                     </button>
//                     </Link>
//                     <span className="text-2xl font-bold text-orange-500">${product.price.toFixed(2)}</span>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="col-span-full text-center text-gray-500 p-10">
//                 <p>No products found matching your criteria.</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;























"use client"
import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Utensils, Pizza, EggFried, Sprout } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';

const products = [
  { id: 1, name: 'Classic Beef Burger', price: 8.99, image: 'https://placehold.co/400x250/d1d5db/374151?text=Classic+Burger', category: 'Burgers' },
  { id: 2, name: 'Supreme Pepperoni Pizza', price: 12.99, image: 'https://placehold.co/400x250/d1d5db/374151?text=Pepperoni+Pizza', category: 'Pizzas' },
  { id: 3, name: 'Spicy Chicken Burger', price: 9.50, image: 'https://placehold.co/400x250/d1d5db/374151?text=Spicy+Chicken', category: 'Burgers' },
  { id: 4, name: 'Margherita Pizza', price: 10.50, image: 'https://placehold.co/400x250/d1d5db/374151?text=Margherita+Pizza', category: 'Pizzas' },
  { id: 5, name: 'Caesar Salad', price: 7.99, image: 'https://placehold.co/400x250/d1d5db/374151?text=Caesar+Salad', category: 'Salads' },
  { id: 6, name: 'Garden Vegetable Salad', price: 8.50, image: 'https://placehold.co/400x250/d1d5db/374151?text=Garden+Salad', category: 'Salads' },
  { id: 7, name: 'Chocolate Lava Cake', price: 6.99, image: 'https://placehold.co/400x250/d1d5db/374151?text=Lava+Cake', category: 'Desserts' },
  { id: 8, name: 'Cheesecake', price: 5.99, image: 'https://placehold.co/400x250/d1d5db/374151?text=Cheesecake', category: 'Desserts' },
  { id: 9, name: 'Grilled Salmon Salad', price: 14.99, image: 'https://placehold.co/400x250/d1d5db/374151?text=Salmon+Salad', category: 'Salads' },
  { id: 10, name: 'Hawaiian Pizza', price: 11.99, image: 'https://placehold.co/400x250/d1d5db/374151?text=Hawaiian+Pizza', category: 'Pizzas' },
];

const categoryIcons = {
  'Burgers': <Utensils size={20} />,
  'Pizzas': <Pizza size={20} />,
  'Salads': <Sprout size={20} />,
  'Desserts': <EggFried size={20} />,
};

const Menu = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cartMessage, setCartMessage] = useState('');

  // 🔥 Cart context use
  const { addToCart } = useCart();

  useEffect(() => {
    const updatedProducts = products.filter(product => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
    setFilteredProducts(updatedProducts);
  }, [selectedCategories, searchTerm]);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  // ✅ Add to cart function (with context)
  const handleAddToCart = (product) => {
    addToCart(product); // actual cart me add karega
    setCartMessage(`${product.name} added to cart!`);
    setTimeout(() => setCartMessage(''), 2000);
  };

  const allCategories = [...new Set(products.map(p => p.category))];

  return (
    <div className="bg-gray-100 min-h-screen font-inter p-4 sm:p-8 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row shadow-2xl rounded-3xl overflow-hidden mt-10">

        {/* Sidebar: Categories */}
        <div className="w-full md:w-[280px] bg-zinc-800 p-8 text-white rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none flex-shrink-0">
          <h1 className="text-3xl font-bold text-center mb-10 text-orange-400">Menu</h1>
          <div className="space-y-6">
            <span className="text-lg font-semibold block text-orange-100">Filter by Category</span>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {allCategories.map(category => (
                <li key={category} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="accent-orange-400 w-5 h-5 cursor-pointer rounded-full"
                  />
                  <label htmlFor={category} className="text-gray-200 text-lg cursor-pointer flex items-center gap-2">
                    {categoryIcons[category]}
                    <span>{category}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Section */}
        <div className="w-full bg-white p-8 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
          {/* Search bar */}
          <div className="flex items-center justify-center mb-10 w-full max-w-lg mx-auto">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for food..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 pr-12 text-gray-800 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Cart Message */}
          {cartMessage && (
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg z-50">
              <div className="flex items-center gap-2">
                <ShoppingCart size={20} />
                <span>{cartMessage}</span>
              </div>
            </div>
          )}

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 place-items-center">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div key={product.id} className="w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="w-full h-44 overflow-hidden rounded-t-2xl">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
                    <p className="text-sm text-gray-600 line-clamp-2">A delicious {product.category.toLowerCase()} made with fresh ingredients.</p>
                  </div>
                  <div className="flex p-5 pt-0 justify-between items-center">
                    
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-orange-500 text-white px-4 py-2.5 rounded-full font-semibold text-sm shadow-md hover:bg-orange-600 transition-colors duration-300"
                      >
                      <span className="flex items-center gap-2">
                        <ShoppingCart size={16} /> Add to Cart
                      </span>
                    </button>
                    
                    <span className="text-2xl font-bold text-orange-500">${product.price.toFixed(2)}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 p-10">
                <p>No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
