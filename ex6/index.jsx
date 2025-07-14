import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Hello, Welcome to React!");
  };

  return (
    <div style={styles.container}>
      <h2>React Click Event Example</h2>
      <button onClick={handleClick} style={styles.button}>
        Click Me
      </button>
      <p style={styles.text}>{message}</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#4e73df",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  text: {
    marginTop: "20px",
    fontSize: "1.2rem",
    color: "#333",
  },
};

export default App;
