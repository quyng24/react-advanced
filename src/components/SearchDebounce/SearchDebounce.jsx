import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import { useDebounce } from "../../hooks/useDenoumce";
import { searchProducts } from "../../api/productApi";

const SearchDebounce = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        if(!debouncedQuery) return;
        const controller = new AbortController();
        async function fetchData() {
            try{
                setLoading(true);
                setError(null);
                const res = await searchProducts(debouncedQuery, page, controller.signal);
                console.log(res)
                setData(res.products)
            } catch (error) {
                if(error.name !== "AbortError") setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
        return () => controller.abort();
    }, [debouncedQuery, page])
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
            <h2 style={{fontWeight: "bold", fontSize: 40, color: '#50baf7'}}>Search Debounce</h2>
            <SearchInput value={query} setQuery={setQuery} />
            <div className="flex flex-col items-center text-center">
                {loading && <p style={{fontWeight: "500", color: 'blue'}}>Loading...</p>}
                {error && <p style={{fontWeight: "500", color: 'red'}}>{error}</p>}
            </div>
            <ProductList data={data}/>
            <Pagination page={page} setPage={setPage} />
        </div>
    )
}
export default SearchDebounce;