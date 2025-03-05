import React from "react";
import { IoMdSearch } from "react-icons/io";
import { useNavigate} from "react-router-dom";
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-start items-center w-[300px] sm:h-14 absolute sm:w-[500px] lg:w-[600px]  top-[-20px] px-2 rounded-md bg-white shadow-lg border-none outline-none focus-within:shadow-lg">
      {" "}
      <IoMdSearch fontSize={21} className="ml-1" />
      <form
        type="submit"
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/search/${searchTerm}`);
        }}
      >
       <input
  type="text"
  onChange={(e) => setSearchTerm(e.target.value)}
  placeholder="Search for free images,videos & more"
  value={searchTerm}
  className="p-2 px-3 w-full min-w-[500px] text-base md:text-lg bg-white outline-none whitespace-nowrap placeholder-gray-500 placeholder-opacity-100 overflow-visible"
/>


      </form>
    </div>
  );
};

export default SearchBar;
