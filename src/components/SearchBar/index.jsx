import React from "react";
import { UilSearch } from "@iconscout/react-unicons";

const SearchBar = () => {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef(null)
  return (
    <div className="relative">
      <UilSearch className="absolute top-2 left-2 h-6 w-6 text-[#a7a7a7]" />
      <input
        type="text"
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="rounded-full bg-[#fff] w-96 pl-12 text-[#929292] text-base py-2 font-normal outline-0 "
      />
    </div>
  );
};

export default SearchBar;
