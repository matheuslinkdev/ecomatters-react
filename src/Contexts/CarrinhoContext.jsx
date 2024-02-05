import { createContext, useContext, useEffect, useState } from "react";

const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [dadosCarregados, setDadosCarregados] = useState(false);

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(carrinhoSalvo);
    setDadosCarregados(true);
  }, []);

  const adicionarAoCarrinho = (produto) => {
    const produtoNoCarrinho = carrinho.find(
      (produtoCarrinho) => produtoCarrinho.nome === produto.nome
    );

    if (produtoNoCarrinho) {
      alert(`O produto ${produto.nome} já está no carrinho.`);
      return;
    } else {
      const novoCarrinho = [...carrinho, produto];
      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
      setCarrinho(novoCarrinho);
    }
  };

  const removerDoCarrinho = (produtoNome) => {
    const novoCarrinho = carrinho.filter(
      (produto) => produto.nome !== produtoNome
    );
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    setCarrinho(novoCarrinho);
  };

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho }}
    >
      {dadosCarregados && children}
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
