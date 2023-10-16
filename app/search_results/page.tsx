import ProductItem from "@/components/ProductItem";
import { BASE_URL } from "@/constant";
import { ProductType } from "@/types";
import { fetchData } from "@/utils/fetchData";
import { BiRefresh } from "react-icons/bi";
import React from "react";
type queryType = {
  search: string;
};

const page = async ({ searchParams }: { searchParams: queryType }) => {
  const query = searchParams.search;
  const products = await fetchData(`${BASE_URL}search?search=${query}`);

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

      {Array.isArray(products) && products.length !== 0 ? (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {products?.map((item: ProductType, idx: number) => (
            <ProductItem key={idx} product={item} />
          ))}
        </div>
      ) : (
        <div className={`my-6 `}>
          <div className="border  flex flex-col bg-white  space-y-3 p-5 md:p-20 justify-center items-center rounded-md">
            <div className=" bg-[#F2F5FF]   border rounded-full p-2">
              <BiRefresh className="text-primary text-lg" />
            </div>

            <p className="text-title  my-2 text-lg font-semibold">
              Please Reload
            </p>

            <p className="text-sm  text-textcolor  text-center">{`There was an error fetching ${query} please reload the page. `}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
