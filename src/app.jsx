import { useEffect } from "react";
import Tarefas from "./tarefas";

function App() {
  useEffect(() => {
    console.log("O componente foi montado!");
  }, []);
  return (
    <div>
      <Tarefas />
    </div>
  );
}

export default App;
