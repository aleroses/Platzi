import { useEffect, useState } from "react";
import "./stylesheets/App.css";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Efecto ejecutado");
    document.title = `Contador: ${count}`;

    return () => {
      console.log("Efecto limpiado");
    };
  }, [count]);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default Timer;
