import { Link } from "react-router-dom";
import "./home.css";

export function HomePage() {
  return (
    <main>
      <Link to={"/products"}>
        <h1 class="titulo" title="Clique para acessar os produtos.">
          MERCADINHO SASA
        </h1>
      </Link>
    </main>
  );
}
