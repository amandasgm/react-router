import { useParams } from "react-router";

export function Details() {
  const params = useParams(); // ou const {id} = useParams() -> pq ai ja leva para o return desestruturado

  return (
    <div>
      <h1>Detalhes</h1>

      <span>ID do produto: <strong>{params.id}</strong></span>
    </div>
  );
}
