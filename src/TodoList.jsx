import React, { useState } from "react";
import './TodoList.css';

function TodoList() {
    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    function adicionarItem(form) {
        form.preventDefault();
        if (!novoItem) {
            return;
        }
        setLista([...lista, { text: novoItem, isCompleted: false }]);
        setNovoItem("");
        document.getElementById('input-entrada').focus();
    }

    function deletarItem(index) {
        const novaLista = lista.filter((_, i) => i !== index);
        setLista(novaLista);
    }

    function deletarTodos() {
        setLista([]);
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionarItem}>
                <input
                    id="input-entrada"
                    type="text"
                    name="tarefa"
                    value={novoItem}
                    onChange={(e) => setNovoItem(e.target.value)}
                    placeholder="Digite sua tarefa"
                />
                <button type="submit">Adicionar</button>
            </form>

            {/*meu Deus isso não ta funcionando ainda*/}
            {/*funcionou kkkkkkkkk*/}

            <div className="ListaTarefas">
                {lista.length < 1 ? (
                    <p>Lista vazia</p>
                ) : (
                    lista.map((item, index) => (
                        <div key={index} className="item">
                            <span>{item.text}</span>
                            <button className="del" onClick={() => deletarItem(index)}>Deletar</button>
                        </div>
                    ))
                )}
                {lista.length > 0 && (
                    <button className="deletarall" onClick={deletarTodos}>Deletar Todas</button>
                )}
            </div>

            <footer>
                <h1>
                    Pedro Humberto Gama De Medeiros <br /> matrícula: 01741824 <br /> o css foi 100% chat gpt
                </h1>
            </footer>
        </div>
    );
}

export default TodoList;
