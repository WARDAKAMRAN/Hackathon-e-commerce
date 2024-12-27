


import Image from "next/image";

const OurProducts = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto p-4 md:p-10">
      <h1 className="text-center text-4xl md:text-5xl font-bold">Our Products</h1>
    

      <div className="mt-8 grid grid-cols-2 gap-8 m-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {cards.map((card, index) => (
          <div key={index} className="relative card group w-full md:w-[220px] h-96 md:h-[400px] overflow-hidden rounded-md">
            <Image src={card.image} alt={card.alt} layout="fill" objectFit="cover" className="rounded-md" />
            <div className="absolute top-2 right-2 rounded-full bg-red-600 text-white text-xs font-bold px-2 py-1">{card.discount}</div>
            <div className="absolute bottom-0 left-0 w-full bg-gray-200 p-2 rounded-b-md">
              <h1 className="text-black font-bold">{card.title}</h1>
              <p className="text-gray-600">{card.description}</p>
              <div className="flex justify-between text-black mt-1">
                <span>${card.currentPrice}</span>
                <span className="line-through">${card.previousPrice}</span>
              </div>
            </div>

             {/* Hover Overlay */}
             <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center">
              <button className="bg-white text-black px-4 py-2 rounded-md mb-4 shadow hover:shadow-lg">
                Add to Cart
              </button>
              <div className="flex space-x-4 text-white">
                <span className="cursor-pointer hover:text-gray-300">🔗 Share</span>
                <span className="cursor-pointer hover:text-gray-300">🔄 Compare</span>
                <span className="cursor-pointer hover:text-gray-300">❤️ Like</span>
              </div>
            </div>
           
            <div className="absolute inset-0 bg-gray-400 opacity-0 group-hover:opacity-70 transition-opacity"></div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
    <button className="text-yellow-600 font-bold mt-10 border border-yellow-600 bg-white py-2 px-6 rounded-lg">Show More</button>
  </div>
    </div>
  );
};

const cards = [
  {
    image: "/whitetable.png",
    alt: "Dining Table",
    discount: "20%",
    title: "Dining Table",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "499.99",
    previousPrice: "599.99",
  },
  {
    image: "/whitechair.png",
    alt: "Sofa Set",
    discount: "15%",
    title: "Sofa Set",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "799.99",
    previousPrice: "999.99",
  },
  {
    image: "/sofa2.png",
    alt: "Decorative Vase",
    discount: "25%",
    title: "Decorative Vase",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "299.99",
    previousPrice: "399.99",
  },
  {
    image: "/livingroom.jpg",
    alt: "Modern Chair",
    discount: "30%",
    title: "Modern Chair",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "199.99",
    previousPrice: "249.99",
  },
  {
    image: "/lamp1.png",
    alt: "Decorative Vase",
    discount: "25%",
    title: "Decorative Vase",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "299.99",
    previousPrice: "399.99",
  },
  {
    image: "/sofa3.png",
    alt: "Modern Chair",
    discount: "30%",
    title: "Modern Chair",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "199.99",
    previousPrice: "249.99",
  },
  {
    image: "/livingroom2.jpg",
    alt: "Decorative Vase",
    discount: "25%",
    title: "Decorative Vase",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "299.99",
    previousPrice: "399.99",
  },
  {
    image: "/couch.jpg",
    alt: "Modern Chair",
    discount: "30%",
    title: "Modern Chair",
    description: "Lorem ipsum dolor sit amet",
    currentPrice: "199.99",
    previousPrice: "249.99",
  },
];

export default OurProducts;
