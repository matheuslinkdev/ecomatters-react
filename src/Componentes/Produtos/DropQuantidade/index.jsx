const DropdownQuantidade = ({quantidade, onChange}) => {
      const opcoes = Array.from({ length: 20 }, (_, index) => index + 1);

        return (
          <select value={quantidade} onChange={(e)=> onChange(Number(e.target.value))}>
            {opcoes.map((opcao) => (
              <option key={opcao} value={opcao}>
                {opcao}
              </option>
            ))}
          </select>
        );
}

export default DropdownQuantidade