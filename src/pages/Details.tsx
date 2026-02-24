import { useParams, useNavigate } from "react-router";

export function Details() {
  const params = useParams(); // ou const {id} = useParams() -> pq ai ja leva para o return desestruturado
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>
        Voltar
      </button>
      <h1>Detalhes</h1>

      <span>
        ID do produto: <strong>{params.id}</strong>
      </span>
    </div>
  );
}
