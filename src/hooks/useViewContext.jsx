import { useContext } from "react";
import { ViewContext } from "../context/ViewContext";


export const useViewContext = () => useContext(ViewContext)