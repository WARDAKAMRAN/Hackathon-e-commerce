import Image from "next/image";

const BrowseRangeComponent = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto p-4 md:p-8">
      <h1 className="text-center text-4xl md:text-5xl font-bold">Browse the Range</h1>
      <p className="text-center text-lg md:text-xl mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. s ac tempor dui sagittis.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-60 ">
        
        <div className="relative card1 w-full md:w-96 h-96 md:h-144">
        <Image src="/table1.png" alt="Card 2" layout="fill" objectFit="cover" className="rounded-md" />
          
          <div className="absolute bottom-[-50px] left-2  text-black p-2 ">Dining</div>
        </div>

        <div className="relative card2 w-full md:w-96 h-128 md:h-132">
        <Image src="/sofa1.png" alt="Card 2" layout="fill" objectFit="cover" className="rounded-md" />
          <div className="absolute bottom-[-50px] left-2 text-black p-2 ">Living</div>
        </div>

        <div className="relative card3 w-full md:w-96 h-128 md:h-132">
        <Image src="/vase1.png" alt="Card 2" layout="fill" objectFit="cover" className="rounded-md" />
          <div className="absolute bottom-[-50px] left-2 text-black">Bed</div>
        </div>
      </div>
    </div>
  );
};

export default BrowseRangeComponent;