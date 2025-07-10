import "./products.css";

import React, { useState } from "react";

export function ProductPage() {
  const [carrinho, setCarrinho] = useState([]);

  const addCarrinho = (product) => {
    setCarrinho([...carrinho, product]);
  };

  return (
    <div>
      <header>
        <h1>PRODUTOS</h1>
        <div className="contador">Carrinho: {carrinho.length} itens</div>
      </header>

      <div className="container">
        <div className="coluna">
          <div className="linha">
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
            <Product
              nome="Farinha"
              descricao="Pacote de farinha 5Kg."
              preco={8.75}
              onAdd={addCarrinho}
            />
            <Product
              nome="Café"
              descricao="Pacote de café 500g."
              preco={14.0}
              onAdd={addCarrinho}
            />
            <Product
              nome="Alface"
              descricao="Alface verde unidade."
              preco={2.5}
              onAdd={addCarrinho}
            />
          </div>
        </div>

        <div className="coluna">
          <div className="linha">
            <Product
              nome="Açúcar"
              descricao="Pacote de açúcar 5Kg."
              preco={10.2}
              onAdd={addCarrinho}
            />
            <Product
              nome="Sal"
              descricao="Pacote de sal 1kg."
              preco={2.5}
              onAdd={addCarrinho}
            />
            <Product
              nome="Leite"
              descricao="Caixa de leite 1L."
              preco={4.3}
              onAdd={addCarrinho}
            />
            <Product
              nome="Macarrão"
              descricao="Pacote de massa 500g."
              preco={5.9}
              onAdd={addCarrinho}
            />
            <Product
              nome="Molho de Tomate"
              descricao="Pacote de molho de tomate."
              preco={4.5}
              onAdd={addCarrinho}
            />
          </div>
        </div>

        <div className="coluna">
          <div className="linha">
            <Product
              nome="Ovos"
              descricao="Bandeja de ovos 12un."
              preco={11.0}
              onAdd={addCarrinho}
            />
            <Product
              nome="Carne"
              descricao="500g de carne moída."
              preco={22.0}
              onAdd={addCarrinho}
            />
            <Product
              nome="Frango"
              descricao="Pacote de frango 1Kg."
              preco={18.5}
              onAdd={addCarrinho}
            />
            <Product
              nome="Papel Higiênico"
              descricao="Pacote com 8un."
              preco={13.2}
              onAdd={addCarrinho}
            />
            <Product
              nome="Vinagre"
              descricao="Vinagre 500 ml."
              preco={6.0}
              onAdd={addCarrinho}
            />
          </div>
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
