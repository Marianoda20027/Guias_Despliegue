import React from "react";
// Hola
export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f4f8",
        margin: 0,
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            color: "#3a86ff",
            marginBottom: "10px",
          }}
        >
          Prueba Guía de Despliegue
        </h1>
      </div>
    </div>
  );
}
