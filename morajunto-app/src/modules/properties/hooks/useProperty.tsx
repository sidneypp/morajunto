import { useContext } from "react";
import { PropertyContext } from "../providers/PropertyProvider";

export const useProperty = () => useContext(PropertyContext);
