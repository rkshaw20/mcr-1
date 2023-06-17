import { createContext, useContext, useReducer } from "react";
import { products } from "./products";

const DataContext = createContext({ products: [], dataDispatch: () => {} });


export const useDataContext=()=>useContext(DataContext)

const dataReducer = (state, action) => {
    switch (action.type) { 
      case 'UPDATE_SHELF':{
        const { id, shelf } = action.payload;
        const updatedProducts = state.products.map((product) => {
          if (product.id === id) {
            return { ...product, shelf:shelf };
          }else{
            return product;
          }
        });
        return { ...state, products: updatedProducts };

      }
      
      default:
        return state; 
    }
  };
  

const dataInitialValue={products:products}

const DataContextProvider=({children})=>{
    const [state, dispatch]=useReducer(dataReducer, dataInitialValue)
    return(
        <DataContext.Provider value={{products:state.products , dataDispatch:dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;