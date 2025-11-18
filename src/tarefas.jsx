import { useState, useEffect } from "react";

function Tarefas() {
  const [tarefas, set_tarefas] = useState("");
  const [listas, set_listas] = useState(() => {
    const tarefasSalvas = localStorage.getItem("tarefassalvas");
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });

  useEffect(() => {
    /* toda vez que a lista muda, essa função é executada e salva as strings localmente. */
    localStorage.setItem("tarefassalvas", JSON.stringify(listas));
  }, [listas]);

  const add_tarefas = () => {
    /* adiciona as tarefas na lista */
    set_listas([...listas, tarefas]);
  };

  const rem_tarefas = () => {
    /* filtra e remove as tarefas na lista (...da forma que está faz com que strings exatamente iguais sejam limpas juntas) */
    const newLista = listas.filter((i) => i !== tarefas);
    set_listas(newLista);
  };

  return (
    <div>
      <input value={tarefas} onChange={(e) => set_tarefas(e.target.value)} />
      <button onClick={add_tarefas}>Adicionar</button>
      <button onClick={rem_tarefas}>Remover</button>
      <ul>
        {listas.length === 0 && <p>-tu não colocou nada aqui .-. 👍-</p>}{" "}
        {/* se o tamanho da lista for igual a zero, retorna o aviso de lista vazia. */}
        {listas.map((tarefas, index) => (
          <li key={index}>{tarefas}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tarefas;
