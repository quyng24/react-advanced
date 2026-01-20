import { IoIosSearch } from "react-icons/io";

const SearchInput = ({value, setQuery}) => {
    return <input 
    type="text" 
    value={value} 
    onChange={(e) => setQuery(e.target.value)} 
    placeholder="Search product..."
    style={{width: '100%',borderBottom: '2px solid #50baf7', padding: '5px 8px', outline: 'none'}}
    name="search-product"
    />
}
export default SearchInput;