import React, { useState, useEffect } from "react";
import "./header.css";

function Header() {
  const [theme, setTheme] = useState("light");

  // Carregar o tema do localStorage ao montar o componente
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Alternar o tema e salvar no localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header
      className="flex flex-col"
      style={{ backgroundColor: "var(--color-header)" }}
    >
      <input
        type="checkbox"
        id="drawer-toggle-custom"
        className="drawer-toggle-custom"
      />

      {/* Botão do drawer */}
      <label
        htmlFor="drawer-toggle-custom"
        className="drawer-label-custom drawer-button p-2 w-auto"
      >
        <img src="../assets/logo.svg" alt="Logo" className="h-8 w-8" />
        <span className="drawer-toggle-text-custom text-[#fff]">Tasker</span>
      </label>

      {/* Drawer */}
      <div
        id="navbar-container"
        className="flex flex-col justify-between"
        style={{
          backgroundColor: "var(--color-navbar)",
        }}
      >
        <nav id="navbar">
          <ul className="flex flex-col">
            <li>
              <a href="/cadastrar-cliente" className="drawer-button">
                <img
                  src="../assets/client.png"
                  alt="Cadastrar cliente"
                  className="h-8 w-8"
                />
                <span className="drawer-toggle-text-custom text-[#fff]">
                  Cadastrar cliente
                </span>
              </a>
            </li>
            <li>
              <a href="/cadastrar-tipo-servico" className="drawer-button">
                <img
                  src="../assets/service.svg"
                  alt="Tipo de serviço"
                  className="h-8 w-8"
                />
                <span className="drawer-toggle-text-custom text-[#fff]">
                  Cad. tipo de serviço
                </span>
              </a>
            </li>
            <li>
              <a href="/servicos-agendados" className="drawer-button">
                <img
                  src="../assets/work.svg"
                  alt="Serviços agendados"
                  className="h-8 w-8"
                />
                <span className="drawer-toggle-text-custom text-[#fff]">
                  Serviços agendados
                </span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão de troca de tema */}
        <div className="ml-1 sm:ml-2">
          <label className="swap swap-rotate mb-2">
            <input
              type="checkbox"
              className="theme-controller"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />

            <svg
              className="swap-off h-10 w-10 fill-[#fff]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-on h-10 w-10 fill-[#fff]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>

      </div>
    </header>
  );
}

export default Header;