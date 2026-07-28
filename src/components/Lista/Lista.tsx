import { useState } from "react";
import Item from "./Item/Item";
import styles from "./style.module.scss"
import { Tarefa } from "../../types/Tarefa";

interface Props {
    tarefas: Tarefa[],
    selecionaTarefa: (tarefaSelecionada: Tarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
    return (
        <aside  className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={tarefa.id}
                        {...tarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;