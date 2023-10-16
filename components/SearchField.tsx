"use client";
import React, { useState, useRef, useEffect } from "react";
import { BsSearch, BsClockHistory, BsArrowRight } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";

const SearchField = () => {
  const [search, setSearch] = useState("");
  const [focus, setFocus] = useState(false);
  const router = useRouter();
  const ref = useRef(null);

  const history = localStorage.getItem("search_history");

  let searchHistory: any;

  if (history) {
    try {
      searchHistory = JSON.parse(history);
    } catch (err: any) {
      searchHistory = [];
      console.log(err.message);
    }
  } else searchHistory = [];

  const handleSearch = () => {
    if (search === "") return;
    if (history) {
      localStorage.setItem(
        "search_history",
        JSON.stringify([...searchHistory, search])
      );
    } else {
      localStorage.setItem("search_history", JSON.stringify([search]));
    }

    router.push(`/search_results?search=${search}`);
  };

  const deleteHistory = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    itemToDelete: string
  ) => {
    e.stopPropagation();

    const updatedHistory = searchHistory.filter(
      (item: string) => item === itemToDelete
    );
    searchHistory = updatedHistory;
    localStorage.setItem("search_history", JSON.stringify(updatedHistory));
  };

  const closeHistory = () => setFocus(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      //@ts-ignore
      if (!ref.current?.contains(event.target)) {
        closeHistory();
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, closeHistory]);

  return (
    <div
      ref={ref}
      // onBlur={() => setFocus(false)}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") handleSearch();
      }}
      className={`${
        focus && searchHistory.length !== 0
          ? "rounded-tl-3xl rounded-tr-3xl"
          : "rounded-3xl"
      } flex relative flex-col  bg-white  w-[90%] md:w-[50%] "`}
    >
      <div className="flex px-5 py-3 space-x-4 items-center">
        <BsSearch className="text-text text-sm" />
        <input
          onFocus={() => setFocus(true)}
          //   onBlur={() => setFocus(false)}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search item"
          className="w-full placeholder:text-text text-text text-sm outline-none border-none bg-white "
        />
        <div
          onClick={handleSearch}
          className="p-1 cursor-pointer hover:bg-[#e4e8e8] rounded-full flex justify-center items-center hover:"
        >
          <BsArrowRight className="text-text text-sm" />
        </div>
      </div>

      {focus && searchHistory.length !== 0 && (
        <div className="bg-white pb-3 overflow-auto h-auto max-h-60 rounded-bl-3xl rounded-br-3xl absolute roun space-y-2 mt-10 w-full">
          {searchHistory?.map((item: string, idx: number) => (
            <div
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/search_results?search=${item}`);
              }}
              key={idx}
              className="w-full flex cursor-pointer items-center justify-between py-2 px-3 hover:bg-[#F8FAFC]"
            >
              <div className="flex space-x-3 items-center">
                <BsClockHistory className="text-text text-sm" />
                <p className="text-text text-sm">{item}</p>
              </div>

              <div className="p-1 hover:bg-[#e4e8e8] rounded-full flex justify-center items-center hover:">
                <AiOutlineClose
                  onClick={(
                    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
                  ) => deleteHistory(e, item)}
                  className="text-text text-sm"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchField;
