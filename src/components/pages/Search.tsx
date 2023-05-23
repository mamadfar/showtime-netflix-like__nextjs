import {FC} from "react";

interface ISearchProps {
    search: string;
    setSearch: (search: string) => void;
}

const Search:FC<ISearchProps> = ({search, setSearch}) => {
    return (
        <div className="flex-1 relative">
            <input type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..."
                   className="w-full text-black rounded-l-sm py-1 pl-7 pr-2 focus:outline-none focus:shadow-md focus:shadow-red-600 transition delay-75"/>
            <span className="absolute left-0 top-1 z-10 text-black">🔎</span>
        </div>
    );
};

export default Search;
