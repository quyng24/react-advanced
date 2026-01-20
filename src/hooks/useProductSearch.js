import { useEffect, useReducer, useRef } from "react"
import { searchProducts } from "../api/productApi";

const initialState = {
    data: [],
    loading: false,
    error: null,
    hasMore: true
}

const searchReducer = (state, action) => {
    switch(action.type) {
        case 'CLEAR':
            return {...initialState};
        case 'START':
            return {...state, loading: true, error: null}
        case "SUCCESS":
            return {
                ...state,
                loading: false,
                data:
                action.page === 1
                    ? action.payload
                    : [...state.data, ...action.payload],
                hasMore: action.payload.length > 0,
            };
        case 'ERROR':
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}

export const useProductSearch = (query, page) => {
    const [state, dispatch] = useReducer(searchReducer, initialState);
    const abortRef = useRef(null);

    useEffect(() => {
        if(!query) {
            dispatch({type: 'CLEAR'});
            return;
        }
        if(abortRef.current) abortRef.current.abort();
        const controller = new AbortController();
        abortRef.current = controller;
        const {signal} = controller;

        dispatch({type: 'START'});

        searchProducts(query, page, signal)
        .then(res => {
            if(!signal.aborted) dispatch({type: 'SUCCESS', payload: res.products, page});
        })
        .catch(err => {
            if(err.name === "AbortError") return;
            if(!signal.aborted) dispatch({type: 'ERROR', payload: err.message});
        });
        return () => controller.abort();
    }, [query, page]);
    return state;
}