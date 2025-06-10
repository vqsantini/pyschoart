import { useState } from "react";

export default function BotoesAtivos() {
  const [ativo, setAtivo] = useState(0);

  const botoes = ["Art", "Sport", "Botão 3", "Botão 4"];
  
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        marginTop: "2rem",
      }} 
    >
      {botoes.map((texto, index) => (
        <button
          key={index}
          onClick={() => setAtivo(index)}
          className={ativo === index ? ".purple" : ".gray"}
          style={{
            padding: "10px 20px",
            backgroundColor: ativo === index ? "#4caf50" : "#e0e0e0",
            color: ativo === index ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: ativo === index ? "bold" :  "normal"
          }}
        >
          {texto}
        </button>
      ))}
    </div>
  );
}
