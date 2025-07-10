import "./cart.css";

export function CartPage() {
  return (
    <main>
      <h1>Seu Carrinho</h1>
      <ul className="list-cart"></ul>
      <h3 className="total">Total: R$ 0.00</h3>
    </main>
  );
}
