import { FC, createContext, useState } from "react";

export const RecipesSearchContext = createContext({
  searchPhrase: "",
  setSearchPhrase: (searchPhrase: string) => {},
});

interface RecipesSearchContextProviderProps {
  children: React.ReactNode;
}

export const RecipesSearchContextProvider: FC<
  RecipesSearchContextProviderProps
> = ({ children }) => {
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <RecipesSearchContext.Provider value={{ searchPhrase, setSearchPhrase }}>
      {children}
    </RecipesSearchContext.Provider>
  );
};
