import React from 'react'
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
const page = ({params}:{params:{id:number}}) => {
    const {id} = params;
    const blog = products.find((items)=> items.id === id)
  return (
    <div>

    </div>
  )
}

export default page