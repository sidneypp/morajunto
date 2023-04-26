import { useContext } from "react";
import { SearchContext } from "../providers/SearchProvider";

export const useSearch = () => useContext(SearchContext);
