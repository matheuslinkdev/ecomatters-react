import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    const itemNoCarrinho = carrinho.find(
      (itemCarrinho) => itemCarrinho.nome === produto.nome
    );

    if (itemNoCarrinho) {
      setCarrinho((prevCarrinho) =>
        prevCarrinho.map((itemCarrinho) => {
        const novoCarrinho = [...prevCarrinho, itemCarrinho];
        localStorage.setItem("carrinho", JSON.stringify(novoCarrinho))
        //   itemCarrinho.id === item.id
        //     ? { ...itemNoCarrinho, quantidade: itemCarrinho.quantidade + 1 }
        //     : itemCarrinho
        // 
        return novoCarrinho
        }
        )
      );
    } else {
      setCarrinho((prevCarrinho) => [
        ...prevCarrinho,
        { ...produto, quantidade: 1 },
      ]);
    }
  };

  const removerDoCarrinho = (itemId) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== itemId);
    setCarrinho(novoCarrinho);
  };

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("UseCarrinho deve ser usado com o CarrinhoProvider");
  }
  return context;
};
