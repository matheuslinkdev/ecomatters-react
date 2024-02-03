import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (item) => {
    const itemNoCarrinho = carrinho.find(
      (itemCarrinho) => itemCarrinho.id === item.id
    );

    if (itemNoCarrinho) {
      setCarrinho((prevCarrinho) =>
        prevCarrinho.map((itemCarrinho) =>
          itemCarrinho.id === item.id
            ? { ...itemNoCarrinho, quantidade: itemCarrinho.quantidade + 1 }
            : itemCarrinho
        )
      );
    } else {
      setCarrinho((prevCarrinho) => [
        ...prevCarrinho,
        { ...item, quantidade: 1 },
      ]);
    }
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const UseCarrinho = () => {
  const context = useContext(CarrinhoProvider);
  if (!context) {
    throw new Error("UseCarrinho deve ser usado com o CarrinhoProvider");
  }
  return context;
};
