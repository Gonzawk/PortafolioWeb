// src/components/Icons.js

import React from "react";
import { FaHome, FaCog, FaUser } from "react-icons/fa"; // Importando íconos de React Icons

const Icons = () => {
  return (
    <div>
      <button>
        <FaHome /> Inicio
      </button>
      <button>
        <FaCog /> Configuración
      </button>
      <button>
        <FaUser /> Perfil
      </button>
    </div>
  );
};

export default Icons;
