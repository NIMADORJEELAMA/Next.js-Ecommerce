"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {/* image cont */}
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image src="" alt="" />
          </div>

          <h1 className="mt-8 font-light text-cl tracking-wide">
            Category Name
          </h1>
        </Link>
        {/* image cont */}
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image src="" alt="" />
          </div>

          <h1 className="mt-8 font-light text-cl tracking-wide">
            Category Name
          </h1>
        </Link>{" "}
        {/* image cont */}
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image src="" alt="" />
          </div>

          <h1 className="mt-8 font-light text-cl tracking-wide">
            Category Name
          </h1>
        </Link>
        {/* image cont */}
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image src="" alt="" />
          </div>

          <h1 className="mt-8 font-light text-cl tracking-wide">
            Category Name
          </h1>
        </Link>{" "}
        {/* image cont */}
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image src="" alt="" />
          </div>

          <h1 className="mt-8 font-light text-cl tracking-wide">
            Category Name
          </h1>
        </Link>{" "}
        {/* image cont */}
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image src="" alt="" />
          </div>

          <h1 className="mt-8 font-light text-cl tracking-wide">
            Category Name
          </h1>
        </Link>{" "}
        {/* image cont */}
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image src="" alt="" />
          </div>

          <h1 className="mt-8 font-light text-cl tracking-wide">
            Category Name
          </h1>
        </Link>{" "}
        {/* image cont */}
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image src="" alt="" />
          </div>

          <h1 className="mt-8 font-light text-cl tracking-wide">
            Category Name
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
