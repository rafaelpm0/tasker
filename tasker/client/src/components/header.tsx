import "./header.css";

function Header() {
  return (
    <header style={{ backgroundColor: "var(--color-header)" }}>
      <input
        type="checkbox"
        id="drawer-toggle-custom"
        className="drawer-toggle-custom"
      />

      {/* Botão do drawer */}
      <label htmlFor="drawer-toggle-custom" className="drawer-label-custom drawer-button p-2">
        <img src="../assets/logo.svg" alt="Logo" className="h-8 w-8" />
        <span className="drawer-toggle-text-custom">Tasker</span>
      </label>

      {/* Drawer */}
      <nav
        className="h-full"
        id="navbar"
        style={{ backgroundColor: "var(--color-navbar)" }}
      >
        <ul>
          <li>
            <a href="/" className="drawer-button">
              <img
                src="../assets/client.svg"
                alt="Cadastrar cliente"
                className="h-8 w-8"
              />
              <span className="drawer-toggle-text-custom">Cadastrar cliente</span>
            </a>
          </li>
          <li>
            <a href="/about" className="drawer-button">
              <img
                src="../assets/service.svg"
                alt="Tipo de serviço"
                className="h-8 w-8"
              />
              <span className="drawer-toggle-text-custom">Cad. tipo de serviço</span>
            </a>
          </li>
          <li>
            <a href="/contact" className="drawer-button">
              <img
                src="../assets/work.svg"
                alt="Serviços agendados"
                className="h-8 w-8"
              />
              <span className="drawer-toggle-text-custom">Serviços agendados</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
