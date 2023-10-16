import ProductItem from "@/components/ProductItem";
import { products } from "@/constant";
import { ProductType } from "@/types";
import React from "react";

const page = () => {
  return (
    <div className="md:px-10 px-4 py-3 ">
      <div className="w-full rounded-md px-4 md:px-10 h-40 md:h-60 py-4 md:py-6 bg-[#FBF0E4]">
        <h1 className="text-primary md:mt-6 font-bold text-2xl md:text-4xl max-w-[400px]">
          Grab up to 20% off on selected product
        </h1>

        <button className="text-white bg-primary rounded-2xl text-sm px-4 py-2 text-center mt-4 md:mt-10">
          Get Started
        </button>
      </div>

      <div className="mt-10 mb-5">
        <h1 className="text-xl font-semibold text-[#1E202B]">Search Results</h1>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item: ProductType, idx: number) => (
          <ProductItem product={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
