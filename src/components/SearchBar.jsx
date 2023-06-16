import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchTerm] = React.useState("");
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);  
  };
  React.useEffect(() => {
 if (searchValue) {
   navigate(`search/${searchValue}`);
 } else {
   navigate("/search");
 }
  }, [searchValue, navigate])
  return (
    <div className="relative">
      <form>
        <UilSearch className="absolute top-2 left-2 h-6 w-6 text-[#a7a7a7]" />
        <input
          type="text"
          placeholder="What do you want to listen to?"
          value={searchValue}
          onChange={handleInputChange}
          className="rounded-full bg-[#fff] w-96 pl-12 text-[#929292] text-base py-2 font-normal outline-0 "
        />
      </form>
    </div>
  );
};

export default SearchBar;