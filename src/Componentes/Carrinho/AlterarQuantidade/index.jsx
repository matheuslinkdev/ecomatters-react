import { useState } from "react";

const AlterarQuantidade = () => {
  const [quantidade, setQuantidade] = useState(1);

  const handleDiminuirQuantidade = () => {
    setQuantidade((quant) => (quant > 1 ? quant - 1 : quant));
  };

  const handleAumentarQuantidade = () => {
    setQuantidade((quant) => (quant < 20 ? quant + 1 : quant));
  };

  return (
    <article>
      <section style={{ display: "flex" }}>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDiminuirQuantidade();
          }}
        >
          -
        </button>
        <h5>{quantidade}</h5>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleAumentarQuantidade();
          }}
        >
          +
        </button>
      </section>
    </article>
  );
};

export default AlterarQuantidade;
