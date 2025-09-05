import Link from "next/link";


const products = [
  { id: 1, name: 'Classic Beef Burger', price: 8.99, image: '/DealImages/Rectangle_8.png' },
  { id: 2, name: 'Supreme Pepperoni Pizza', price: 9.99, image: '/images/pizza.jpg' },
  { id: 3, name: 'Burger', price: 8.99, image: '/images/burger.jpg' },
  { id: 4, name: 'Pizza', price: 9.99, image: '/images/pizza.jpg' },
];


const Menu = () => {
  return (

<section class="w-[85%] mx-auto pt-20">
        <div class="flex flex-col md:flex-row">

          {/* Section 1 */}
            <div class="md:w-[230px] w-full md:min-h-[550px] bg-gray-800 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none p-10">
                <div>
                    <h1 class="text-2xl font-bold text-white text-center mb-8">Menu</h1>
                    <div class="flex flex-col justify-center items-start">
                        <span class="text-xl text-white mb-4">Filter</span>
                        <ul class="space-y-2 grid grid-cols-2 md:grid-cols-1 sm:grid-cols-3 gap-x-12">
                            <li class="flex gap-2">
                                <input type="checkbox" class="accent-orange-400 w-4"/>
                                <span class="text-white text-xl">Burgers</span>
                            </li>
                            <hr class="hidden md:block my-y text-gray-400"/>
                            
                            <li class="flex gap-2">
                                <input type="checkbox" class="accent-orange-400 w-4"/>
                                <span class="text-white text-xl">Pizzas</span>
                            </li>
                            <hr class="hidden md:block my-y text-gray-400"/>
                            
                            <li class="flex gap-2">
                                <input type="checkbox" class="accent-orange-400 w-4"/>
                                <span class="text-white text-xl">Salads</span>
                            </li>
                            <hr class="hidden md:block my-y text-gray-400"/>
                            
                            <li class="flex gap-2">
                                <input type="checkbox" class="accent-orange-400 w-4"/>
                                <span class="text-white text-xl">Desserts</span>
                            </li>
                            <hr class="hidden md:block my-y text-gray-400"/>


                            <li class="flex gap-2">
                                <input type="checkbox" class="accent-orange-400 w-4"/>
                                <span class="text-white text-xl">Desserts</span>
                            </li>
                            <hr class="hidden md:block my-y text-gray-400"/>

                            <li class="flex gap-2">
                                <input type="checkbox" class="accent-orange-400 w-4"/>
                                <span class="text-white text-xl">Desserts</span>
                            </li>
                            <hr class="hidden md:block my-y text-gray-400"/>

                            <li class="flex gap-2">
                                <input type="checkbox" class="accent-orange-400 w-4"/>
                                <span class="text-white text-xl">Desserts</span>
                            </li>
                            <hr class="hidden md:block my-y text-gray-400"/>

                            <li class="flex gap-2">
                                <input type="checkbox" class="accent-orange-400 w-4"/>
                                <span class="text-white text-xl">Desserts</span>
                            </li>
                            <hr class="hidden md:block my-y text-gray-400"/>

                        </ul>
                    </div>
                </div>
            </div>
            

            {/* section 2 */}
            <div class="w-full bg-[#F4F4F4] min-h-[550px] p-10 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
                <div class="flex justify-center items-center mb-14">
                    <input type="text" placeholder="Search" class="md:px-4 py-2 px-3 outline-none border-none bg-zinc-700 rounded-l-md text-white"/>
                    <button class="bg-black text-white px-4 py-2 rounded-r-md">Search</button>
                </div>
                
                {/* Cards */}
                <div class="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
                    <div class="min-h-[300px] w-[250px] bg-gray-400 rounded-xl">
                        <div class="flex flex-col">
                            <div class="h-[170px] w-full bg-blue-400 rounded-t-xl rounded-b-4xl "></div>
                            <div class="flex flex-col p-4">
                                <h1 class="text-xl font-bold">Burger</h1>
                                <p class="text-sm">Juicy beef patty, fresh lettuce, and ripe tomatoes.</p>
                            </div>
                            <div class="flex p-4 justify-between items-center">
                               <Link href="/Pages/Cart">
                                <button class="bg-black rounded-md text-white px-4 py-2">Add to Cart</button>
                                </Link>
                                <span class="text-xl font-bold">$200</span>
                            </div>
                        </div>
                    </div>

                    <div class="min-h-[300px] w-[250px] bg-gray-400 rounded-xl">
                        <div class="flex flex-col">
                            <div class="h-[170px] w-full bg-blue-400 rounded-t-xl rounded-b-4xl "></div>
                            <div class="flex flex-col p-4">
                                <h1 class="text-xl font-bold">Burger</h1>
                                <p class="text-sm">Juicy beef patty, fresh lettuce, and ripe tomatoes.</p>
                            </div>
                            <div class="flex p-4 justify-between items-center">
                               <Link href="/Pages/Cart">
                                <button class="bg-black rounded-md text-white px-4 py-2">Add to Cart</button>
                                </Link>
                                <span class="text-xl font-bold">$200</span>
                            </div>
                        </div>
                    </div>

                    <div class="min-h-[300px] w-[250px] bg-gray-400 rounded-xl">
                        <div class="flex flex-col">
                            <div class="h-[170px] w-full bg-blue-400 rounded-t-xl rounded-b-4xl "></div>
                            <div class="flex flex-col p-4">
                                <h1 class="text-xl font-bold">Burger</h1>
                                <p class="text-sm">Juicy beef patty, fresh lettuce, and ripe tomatoes.</p>
                            </div>
                            <div class="flex p-4 justify-between items-center">
                               <Link href="/Pages/Cart">
                                <button class="bg-black rounded-md text-white px-4 py-2">Add to Cart</button>
                                </Link>
                                <span class="text-xl font-bold">$200</span>
                            </div>
                        </div>
                    </div>

                    <div class="min-h-[300px] w-[250px] bg-gray-400 rounded-xl">
                        <div class="flex flex-col">
                            <div class="h-[170px] w-full bg-blue-400 rounded-t-xl rounded-b-4xl "></div>
                            <div class="flex flex-col p-4">
                                <h1 class="text-xl font-bold">Burger</h1>
                                <p class="text-sm">Juicy beef patty, fresh lettuce, and ripe tomatoes.</p>
                            </div>
                            <div class="flex p-4 justify-between items-center">
                               <Link href="/Pages/Cart">
                                <button class="bg-black rounded-md text-white px-4 py-2">Add to Cart</button>
                                </Link>
                                <span class="text-xl font-bold">$200</span>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>

  );
};

export default Menu;