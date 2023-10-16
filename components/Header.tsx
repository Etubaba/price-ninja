"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState("");
  const path = usePathname();

  const query = useSearchParams();
  const defaultSearch = query.get("search");

  if (path === "/") return null;
  return (
    <div className=" px-8 py-4 z-50 hidden font-sans  lg:flex shadow-sm  bg-white sticky top-0 justify-between items-center">
      <Link href={`/`}>
        <h2 className="text-title logo text-primary  font-semibold">
          {/* 𝕻𝖗𝖎𝖈𝖊<b className="">𝕹𝖎𝖓𝖏𝖆</b> */}
          ℙ𝕣𝕚𝕔𝕖ℕ𝕚𝕟𝕛𝕒
        </h2>
      </Link>

      <div
        className={`shadow-sm border ${
          active && "border-primary"
        } w-full md:w-[20rem] r flex px-3 py-1 rounded-lg  bg-white`}
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder="search..."
          className=" outline-none   placeholder:font-[300]  w-full"
          type={"text"}
        />
        <Link
          href={`/search_results?search=${
            search === "" ? defaultSearch : search
          }`}
        >
          <div className="bg-primary p-1.5  rounded-full flex justify-center items-center">
            <BsSearch className="text-white text-sm" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
