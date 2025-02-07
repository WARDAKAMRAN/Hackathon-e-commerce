

import Image from "next/image";
import Link from "next/link"
const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      img: "/lamp1.png",
      isNew: false,
    },
    {
      id: 2,
      name: "Leviosa",
      price: "Rp 2.500.000",
      originalPrice: null,
      img: "/sofa3.png",
      isNew: true,
    },
    {
      id: 3,
      name: "Lolito",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      img: "/dining1.png",
      isNew: false,
    },
    {
      id: 4,
      name: "Respira",
      price: "Rp 500.000",
      originalPrice: null,
      img: "/sofa2.png",
      isNew: true,
    },
    {
      id: 5,
      name: "Syltherine",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      img: "/whitetable.png",
      isNew: false,
    },
    {
      id: 7,
      name: "Leviosa",
      price: "Rp 2.500.000",
      originalPrice: null,
      img: "/coffee.jpg",
      isNew: true,
    },
    {
      id: 8,
      name: "Lolito",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      img: "/stove.png",
      isNew: false,
    },
    {
      id: 9,
      name: "Respira",
      price: "Rp 500.000",
      originalPrice: null,
      img: "/laptop.jpg",
      isNew: true,
    },
    {
      id: 10,
      name: "Syltherine",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      img: "/wall2.png",
      isNew: false,
    },
    {
      id: 11,
      name: "Leviosa",
      price: "Rp 2.500.000",
      originalPrice: null,
      img: "/wall.png",
      isNew: true,
    },
    {
      id: 12,
      name: "Lolito",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      img: "/dining2.png",
      isNew: false,
    },
    {
      id: 13,
      name: "Respira",
      price: "Rp 500.000",
      originalPrice: null,
      img: "/livingroom.jpg",
      isNew: true,
    },
    {
      id: 14,
      name: "Syltherine",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      img: "/couch.jpg",
      isNew: false,
    },
    {
      id: 15,
      name: "Leviosa",
      price: "Rp 2.500.000",
      originalPrice: null,
      img: "/whitetable.png",
      isNew: true,
    },
    {
      id: 16,
      name: "Lolito",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      img: "/dining3.png",
      isNew: false,
    },
    {
      id: 17,
      name: "Respira",
      price: "Rp 500.000",
      originalPrice: null,
      img: "/sofa3.png",
      isNew: true,
     },
  
   ];

  return (
    <div className="p-6">
     
      {/* Product Grid */}
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative border rounded-lg bg-white shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative h-96 w-90">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform"
              />
              {/* Discount or New Label */}
              {product.isNew || product.discount ? (
                <div
                  className={`absolute top-2 left-2 ${
                    product.isNew ? "bg-green-500" : "bg-red-500"
                  } text-white text-xs px-3 py-1  rounded-full`}
                >
                  {product.isNew ? "New" : product.discount}
                </div>
              ) : null}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center">
              <Link href={`{product.id}`}><button className="bg-white text-black px-4 py-2 rounded-md mb-4 shadow hover:shadow-lg">
                Add to Cart
              </button></Link>
              <div className="flex space-x-4 text-white">
                <span className="cursor-pointer hover:text-gray-300">🔗 Share</span>
                <span className="cursor-pointer hover:text-gray-300">🔄 Compare</span>
                <span className="cursor-pointer hover:text-gray-300">❤️ Like</span>
             </div>
            </div>

             {/* Product Info */}
            <div className="p-4 bg-slate-200">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {product.originalPrice && (
                  <span className="line-through mr-2">{product.originalPrice}</span>
                )}
                {product.price}
              </p>
              <p className="text-xs text-gray-400">
                This is a sample product description text.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-4 mt-8 bg-peach-100 p-4 rounded-md">
        <button className="bg-rose-50 border px-4 py-2 rounded-md shadow hover:shadow-lg">
          1
        </button>
        <button className="bg-rose-50 border px-4 py-2 rounded-md shadow hover:shadow-lg">
          2
        </button>
        <button className="bg-rose-50 border px-4 py-2 rounded-md shadow hover:shadow-lg">
         3
       </button>
      <button className="bg-rose-50 text-black px-6 py-2 rounded-md shadow hover:shadow-lg">
          Next
        </button>
      </div>
    </div>
   );
 };

export default ProductGrid;