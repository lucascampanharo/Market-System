import "./products.css";

import React, { useState } from "react";

export function ProductPage() {
  const [carrinho, setCarrinho] = useState([]);

  const addCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  return (
    <div>
      <header>
        <h1>PRODUTOS</h1>
        <div className="contador">Carrinho: {carrinho.length} itens</div>
      </header>

      <div className="container">
        <div className="coluna">
          <Product
            nome="Arroz"
            descricao="Pacote de arroz 5Kg."
            preco={25.9}
            onAdd={addCarrinho}
          />
          <Product
            nome="Feijão"
            descricao="Pacote de feijão 2Kg."
            preco={12.5}
            onAdd={addCarrinho}
          />
        </div>
      </div>
    </div>
  );
}

function Product({ nome, descricao, preco, onAdd }) {
  return (
    <div className="linha">
      <button
        className="btn-produto"
        onClick={() => onAdd({ nome, descricao, preco })}
        title="Pressione para adicionar ao carrinho."
      >
        {nome}
      </button>
      <p>{descricao}</p>
      <div className="preco">
        <p>R${preco.toFixed(2)}</p>
      </div>
    </div>
  );
}
