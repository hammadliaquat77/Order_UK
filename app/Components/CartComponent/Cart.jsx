// "use client"
// import { useState } from 'react';
// import { Minus, Plus, Trash2, ArrowLeft, Utensils, Tag } from 'lucide-react';


// const initialSelectedItems = [
//   { id: 1, name: 'Classic Beef Burger', price: 8.99, quantity: 1, image: 'https://placehold.co/400x250/d1d5db/374151?text=Burger' },
//   { id: 2, name: 'Supreme Pepperoni Pizza', price: 12.99, quantity: 2, image: 'https://placehold.co/400x250/d1d5db/374151?text=Pizza' },
//   { id: 3, name: 'Spicy Chicken Burger', price: 9.50, quantity: 1, image: 'https://placehold.co/400x250/d1d5db/374151?text=Spicy+Chicken' },
//   { id: 4, name: 'Hawaiian Pizza', price: 11.99, quantity: 1, image: 'https://placehold.co/400x250/d1d5db/374151?text=Hawaiian+Pizza' },
// ];

// const Cart = () => {
//   const [selectedItems, setSelectedItems] = useState(initialSelectedItems);

//   // Function to handle quantity change
//   const handleQuantityChange = (itemId, change) => {
//     setSelectedItems(prevItems =>
//       prevItems.map(item =>
//         item.id === itemId
//           ? { ...item, quantity: Math.max(1, item.quantity + change) }
//           : item
//       )
//     );
//   };

//   // Function to handle removing an item
//   const handleRemoveItem = (itemId) => {
//     setSelectedItems(prevItems => prevItems.filter(item => item.id !== itemId));
//   };
  
//   // Calculate totals
//   const subtotal = selectedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
//   const tax = subtotal * 0.08; // 8% tax example
//   const deliveryFee = 5.00; // Fixed delivery fee
//   const grandTotal = subtotal + tax + deliveryFee;

//   return (
//     <div className="bg-gray-100 min-h-screen p-4 sm:p-8 font-inter flex justify-center">
//       <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden p-6 md:p-10 my-10">

//         {/* Header and Back Button */}
//         <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-200">
//           <button className="flex items-center text-gray-500 hover:text-orange-500 transition-colors">
//             <ArrowLeft size={24} />
//             <span className="ml-2 font-semibold hidden sm:inline">Back to Menu</span>
//           </button>
//           <h1 className="text-3xl font-bold text-gray-800 flex-grow text-center">Your Cart</h1>
//           <div className="w-24"></div> {/* Placeholder to center the title */}
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Cart Items List */}
//           <div className="flex-1 space-y-6">
//             {selectedItems.length > 0 ? (
//               selectedItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-50 rounded-xl shadow-md"
//                 >
//                   <div className="flex items-center space-x-4 w-full sm:w-auto">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
//                     />
//                     <div className="flex-1">
//                       <p className="font-bold text-lg text-gray-800">{item.name}</p>
//                       <p className="text-gray-500">${item.price.toFixed(2)}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-4 mt-4 sm:mt-0">
//                     <div className="flex items-center border border-gray-300 rounded-full px-2 py-1">
//                       <button onClick={() => handleQuantityChange(item.id, -1)} className="p-1 rounded-full text-gray-600 hover:bg-gray-200 transition-colors">
//                         <Minus size={20} />
//                       </button>
//                       <span className="w-8 text-center font-semibold text-lg">{item.quantity}</span>
//                       <button onClick={() => handleQuantityChange(item.id, 1)} className="p-1 rounded-full text-gray-600 hover:bg-gray-200 transition-colors">
//                         <Plus size={20} />
//                       </button>
//                     </div>
//                     <p className="font-bold text-lg text-orange-500 w-20 text-center">${(item.price * item.quantity).toFixed(2)}</p>
//                     <button onClick={() => handleRemoveItem(item.id)} className="p-2 rounded-full text-red-500 hover:bg-red-100 transition-colors">
//                       <Trash2 size={24} />
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="text-center text-gray-500 py-12">
//                 <p className="text-xl font-medium">Your cart is empty.</p>
//                 <p className="text-sm mt-2">Add some delicious items from the menu!</p>
//               </div>
//             )}
//           </div>

//           {/* Order Summary */}
//           <div className="w-full lg:w-96 bg-gray-50 p-6 rounded-2xl shadow-inner flex flex-col justify-between">
//             <div>
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
//               <div className="space-y-3 text-gray-600">
//                 <div className="flex justify-between items-center">
//                   <span>Subtotal</span>
//                   <span className="font-semibold text-gray-800">${subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span>Tax</span>
//                   <span className="font-semibold text-gray-800">${tax.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span>Delivery Fee</span>
//                   <span className="font-semibold text-gray-800">${deliveryFee.toFixed(2)}</span>
//                 </div>
//               </div>
//               <div className="border-t border-gray-300 my-6 pt-4">
//                 <div className="flex justify-between items-center font-bold text-xl text-gray-800">
//                   <span>Grand Total</span>
//                   <span className="text-orange-500">${grandTotal.toFixed(2)}</span>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <div className="flex items-center space-x-2">
//                   <div className="relative flex-1">
//                     <input
//                       type="text"
//                       placeholder="Promo Code"
//                       className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                     />
//                     <Tag size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                   </div>
//                   <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200">
//                     Apply
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <button className="bg-orange-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-orange-700 transition-colors duration-200 w-full mt-8">
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;















"use client"
import { Minus, Plus, Trash2, ArrowLeft, Tag } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';
import Link from "next/link";

const Cart = () => {
  // 🔥 Cart context values
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax example
  const deliveryFee = cartItems.length > 0 ? 5.00 : 0; // delivery fee if items exist
  const grandTotal = subtotal + tax + deliveryFee;

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8 font-inter flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden p-6 md:p-10 my-10">

        {/* Header and Back Button */}
        <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-200">
          <Link href="/Menu" className="flex items-center text-gray-500 hover:text-orange-500 transition-colors">
            <ArrowLeft size={24} />
            <span className="ml-2 font-semibold hidden sm:inline">Back to Menu</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 flex-grow text-center">Your Cart</h1>
          <div className="w-24"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items List */}
          <div className="flex-1 space-y-6">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-50 rounded-xl shadow-md"
                >
                  <div className="flex items-center space-x-4 w-full sm:w-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-lg text-gray-800">{item.name}</p>
                      <p className="text-gray-500">${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                    <div className="flex items-center border border-gray-300 rounded-full px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
                      >
                        <Minus size={20} />
                      </button>
                      <span className="w-8 text-center font-semibold text-lg">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                    <p className="font-bold text-lg text-orange-500 w-20 text-center">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 rounded-full text-red-500 hover:bg-red-100 transition-colors"
                    >
                      <Trash2 size={24} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-12">
                <p className="text-xl font-medium">Your cart is empty.</p>
                <p className="text-sm mt-2">Add some delicious items from the menu!</p>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96 bg-gray-50 p-6 rounded-2xl shadow-inner flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between items-center">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tax</span>
                  <span className="font-semibold text-gray-800">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Delivery Fee</span>
                  <span className="font-semibold text-gray-800">${deliveryFee.toFixed(2)}</span>
                </div>
              </div>
              <div className="border-t border-gray-300 my-6 pt-4">
                <div className="flex justify-between items-center font-bold text-xl text-gray-800">
                  <span>Grand Total</span>
                  <span className="text-orange-500">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center space-x-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Promo Code"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <Tag size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                  <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200">
                    Apply
                  </button>
                </div>
              </div>
            </div>

             <Link href={"/Checkout"}>
            <button className="bg-orange-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-orange-700 transition-colors duration-200 w-full mt-8">
              Proceed to Checkout
            </button>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
