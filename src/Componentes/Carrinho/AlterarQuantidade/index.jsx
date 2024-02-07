import { useEffect, useState } from "react";

const AlterarQuantidade = ({ quantidade, onQuantidadeChange }) => {
  const [quant, setQuant] = useState(quantidade);

  useEffect(() => {
    setQuant(quantidade);
  }, [quantidade]);

  const handleDiminuirQuantidade = () => {
    setQuant((quantidade) => (quantidade > 1 ? quantidade - 1 : quantidade));
  };

  const handleAumentarQuantidade = () => {
    setQuant((quantidade) => (quantidade <= 19 ? quantidade + 1 : quantidade));
  };

  useEffect(() => {
    onQuantidadeChange(quant);
  }, [quant, onQuantidadeChange]);

  return (
    <section className="botoes-alterar-quantidade">
      <button
        onClick={(e) => {
          e.preventDefault();
          handleDiminuirQuantidade();
        }}
        className="botao-quantidade"
      >
        <span>-</span>
      </button>
      <h5 className="quantidade">{quant}</h5>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleAumentarQuantidade();
        }}
        className="botao-quantidade"
      >
        <span>+</span>
      </button>
    </section>
  );
};

export default AlterarQuantidade;
