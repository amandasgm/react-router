import { useNavigate } from "react-router"

export function Home(){
  const navigate = useNavigate()

  function goProducts(){
    navigate("/products")
  }


  return (
    <div>
      <h1>Pagina home</h1>
      <nav>
        <a href="/products"> Produtos</a>
        <a href="/products?category=tvs"> Categoria</a>

        <button type="button" onClick={goProducts}>Ver produtos</button>
      </nav>
    </div>
  )
}