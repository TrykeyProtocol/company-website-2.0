"use client";

import React from "react";
import Link from "next/link";
import { Search, Bell, Filter, Heart } from "lucide-react";
import MarketplaceNav from "@/library/components/organisms/marketplace-nav";
import Image from "next/image";

// Product type definition
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

const PartSellerHome = () => {
  // Sample product data - in a real app, this would come from an API or CMS
  const [products, setProducts] = React.useState<Product[]>([
    {
      id: "1",
      name: "Hilson Brake Pads",
      category: "Brake and suspension",
      price: 65000.00,
      image: "/images/marketplace/partseller/brake.png"
    },
    {
      id: "2",
      name: "Bosch Fan Belt",
      category: "Brand and suspension",
      price: 7000.00,
      image: "/images/marketplace/partseller/belt.png"
    },
    // {
    //   id: "3",
    //   name: "Oil Filter",
    //   category: "Engine parts",
    //   price: 3500.00,
    //   image: "/images/oil-filter.jpg"
    // },
    // {
    //   id: "4",
    //   name: "Car Battery",
    //   category: "Electrical parts",
    //   price: 45000.00,
    //   image: "/images/car-battery.jpg"
    // }
  ]);

  const [favorites, setFavorites] = React.useState<string[]>([]);

  const toggleFavorite = (productId: string) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Header */}
      <header className="bg-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
              <img
                src="/images/dashboard/avatar.jpg"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-xs text-lightMode-brand-primary font-bold">
                Welcome Back,
              </div>
              <div className="font-semibold">Chinedu</div>
            </div>
          </div>
          <div className="flex gap-4 text-gray-500">
            <button className="hover:text-orange-500 transition-all duration-300">
              <Bell size={20} />
            </button>
          </div>
        </div>
        <div className="mt-4 relative">
          <div className="flex items-center border-gray-100 border rounded-md px-3 py-2">
            <Search size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search vehicles"
              className="bg-transparent border-none outline-none flex-1 text-sm"
            />
          </div>
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <Filter size={18} className="text-gray-400" />
          </button>
        </div>
      </header>

      {/* Deals Banner */}
      <div className="px-4 mt-4">
        <div className="bg-black text-white p-4 rounded-lg relative ">
          <div className="z-10 relative">
            <h3 className="text-lg font-bold">Get the Best Deals</h3>
            <p className="text-lg font-bold">on Cars & Parts</p>
            <span className="text-xs pt-3">All in One Place!</span>
          </div>
          <div className="absolute right-0 -bottom-10">
            <img
              src="/images/marketplace/partseller/part.png"
              alt="Car Parts"
              className=" w-[222px]"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mt-9">
        <div className="px-4 flex items-center justify-between">
          <h3 className="font-semibold">Categories</h3>
        </div>
        <div className="grid grid-cols-4 gap-6 px-4 mt-4">
          <div className="bg-orange-100 rounded-lg flex flex-col items-center gap-2 p-2">
            <img
              src="/images/marketplace/partseller/muscle-car.svg"
              alt="Cars"
              className="w-8 h-8"
            />
            <span className="text-xs text-center">Cars</span>
          </div>
          <div className="bg-orange-100 rounded-lg flex flex-col items-center gap-2 p-2">
            <img
              src="/images/marketplace/partseller/belt.svg"
              alt="Keke Parts"
              className="w-8 h-8"
            />
            <span className="text-xs text-center">Keke Parts</span>
          </div>
          <div className="bg-orange-100 rounded-lg flex flex-col items-center gap-2 p-2">
            <img
              src="/images/marketplace/partseller/tire.svg"
              alt="Car Parts"
              className="w-8 h-8"
            />
            <span className="text-xs text-center">Car Parts</span>
          </div>
          <div className="bg-orange-100 rounded-lg flex flex-col items-center gap-2 p-2">
            <img
              src="/images/marketplace/partseller/car.svg"
              alt="Services"
              className="w-8 h-8"
            />
            <span className="text-xs text-center">Services</span>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-6 pb-4">
        <div className="px-4 flex items-center justify-between">
          <h3 className="font-semibold">Recommendations</h3>
          <button className="text-xs text-gray-500">See all</button>
        </div>
        {/* Dynamic Product Grid */}
        <div className="mt-4 px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-2">
          {products.map((product) => (
            <div key={product.id} className="min-w-[150px] bg-white border border-gray-200 rounded-lg p-2">
              <div className="relative">
                <Image
                width={138}
                height={94}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover rounded"
                  
                />
                <button 
                  className="absolute top-1 right-1 bg-white rounded-full p-1"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart 
                    size={16} 
                    className={favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-500"}
                  />
                </button>
              </div>
              <div className="mt-2 flex flex-col items-center p-3">
                <h4 className="font-semibold text-sm">{product.name}</h4>
                <div className="text-xs text-gray-500">{product.category}</div>
                <div className="mt-1 font-bold text-lightMode-brand-primary">{formatPrice(product.price)}</div>
                <button className="mt-2 w-full bg-black text-white py-1 rounded-md text-sm">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <MarketplaceNav userType="part-seller" />
    </div>
  );
};

export default PartSellerHome;