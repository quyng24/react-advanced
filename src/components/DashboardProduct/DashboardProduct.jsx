import { useState } from "react";
import SearchInput from "../common/SearchInput";
import ProductList from "../common/ProductList";
import Pagination from "../common/Pagination";
import { useDebounce } from "../../hooks/useDenoumce";
import { useProductSearch } from "../../hooks/useProductSearch";

const DashboardProduct = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const deboundcedQuery = useDebounce(query, 500);
    const { data, loading, error } = useProductSearch(deboundcedQuery, page);

    const handleSearch = (value) => {
        setQuery(value);
        setPage(1);
    }


    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 20, border: '1px solid #ccc', padding: 20}}>
            <h1 style={{fontWeight: "bold", fontSize: 40, color: '#50baf7'}}>Dashboard Product</h1>
            <SearchInput value={query} setQuery={handleSearch} />
            {loading && <p style={{color: '#50baf7'}}>Loading...</p>}
            {error && <p style={{color: 'red'}}>{error}</p>}
            <ProductList data={data} />
            <Pagination page={page} setPage={setPage} />
        </div>
    )
}
export default DashboardProduct;