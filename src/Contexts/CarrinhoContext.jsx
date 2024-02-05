import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    const produtoNoCarrinho = carrinho.find(
      (produtoCarrinho) => produtoCarrinho.nome === produto.nome
    );

    if (produtoNoCarrinho) {
      alert(`O produto ${produto.nome} já está no carrinho.`);
      return;
    } else {
      setCarrinho((prevCarrinho) => [
        ...prevCarrinho,
        { ...produto},
      ]);
    }
  };

  const removerDoCarrinho = (produtoNome) => {
    const novoCarrinho = carrinho.filter(
      (produto) => produto.nome !== produtoNome
    );
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
