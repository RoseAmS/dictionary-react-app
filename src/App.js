import React from "react";
import logo from "./LogoRA.png";
import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer text-center m-5">
          <small>
            <a href="https://github.com/RoseAmS/dictionary-react-app">
              Open Source
            </a>
            , coded by Rosa Aminta
          </small>
        </footer>
      </div>
    </div>
  );
}
