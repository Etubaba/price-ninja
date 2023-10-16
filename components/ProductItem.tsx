import { ProductType } from "@/types";
import Link from "next/link";
import React from "react";

const ProductItem = ({
  product: { image, price, title, website, link },
}: {
  product: ProductType;
}) => {
  return (
    <Link href={link} target="_blank">
      <div className="mb-4 md:mb-6 h-[300px]  rounded-md  shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)]">
        <div className="w-full rounded-tr-md rounded-tl-md relative h-48 inline-block overflow-hidden">
          <img
            src={image}
            className="w-full zoom-image object-contain hover:opacity-90 mb-2 h-full cursor-pointer "
            alt={title}
          />
        </div>
        <div className="px-2 pb-3">
          <h1 className="text-[#1E202B] mb-2 text-sm max-h-[30px] min-h-[30px] font-semibold">
            {title.substring(0, 47)}
          </h1>
          <p className="text-[#9095A6] text-lg">
            {website.charAt(0).toUpperCase() + website.slice(1)}
          </p>

          <h2 className="text-primary  font-semibold text-lg">{price}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
