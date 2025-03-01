import React from "react";
import Link from "next/link";
import Image from "next/image";
const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28184434/pexels-photo-28184434/free-photo-of-a-close-up-of-a-blue-ocean-with-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/30337239/pexels-photo-30337239/free-photo-of-romantic-couples-hands-with-wedding-rings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md  "
          />
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$79</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add To Cart
        </button>
      </Link>

      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28184434/pexels-photo-28184434/free-photo-of-a-close-up-of-a-blue-ocean-with-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/30337239/pexels-photo-30337239/free-photo-of-romantic-couples-hands-with-wedding-rings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md  "
          />
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$79</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add To Cart
        </button>
      </Link>

      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28184434/pexels-photo-28184434/free-photo-of-a-close-up-of-a-blue-ocean-with-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/30337239/pexels-photo-30337239/free-photo-of-romantic-couples-hands-with-wedding-rings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md  "
          />
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$79</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add To Cart
        </button>
      </Link>

      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28184434/pexels-photo-28184434/free-photo-of-a-close-up-of-a-blue-ocean-with-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/30337239/pexels-photo-30337239/free-photo-of-romantic-couples-hands-with-wedding-rings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md  "
          />
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$79</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add To Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
