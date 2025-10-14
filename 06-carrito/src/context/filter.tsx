import { createContext, useState, type Dispatch, type SetStateAction } from "react";

type Filters = {
  category: string;
  minPrice: number;
}

type FiltersContextType = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>
}


// 1.- Crear contexto (puedes tiparlo luego)
export const FiltersContext = createContext<FiltersContextType>({
  filters: {category: 'all', minPrice: 0},
  setFilters: () => {}
});

// 2.- Crear el provider
export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<Filters>({
    category: 'all', 
    minPrice: 0
  })
  return (
    <FiltersContext.Provider 
      value={{
        filters, 
        setFilters}}
    >   
      {children}
    </FiltersContext.Provider>
  );
}
