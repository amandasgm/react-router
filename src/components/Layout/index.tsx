import "./styles.css"

import { Outlet } from "react-router"

export function Layout(){
  return (
    <div className="user">
      <header>
        <p>Olá, Amanda!</p>
      </header>

      <Outlet />
      <footer>
        <span>Todos os direitos reservados</span>
      </footer>
    </div>
  )
}