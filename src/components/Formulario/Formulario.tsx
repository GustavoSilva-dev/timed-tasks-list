import { useState } from "react";
import Botao from "../Botao/Botao";
import styles from './style.module.scss'
import { Tarefa } from "../../types/Tarefa";
import { setTarefas } from "../../types/setTarefas";
import { v4 as uuidv4 } from "uuid";

function Formulario({ setTarefas }: setTarefas) {
    const [estado, setEstado] = useState({
        tarefa: "",
        tempo: "00:00:00"
    })

    const adicionarTarefa = (evento: React.SubmitEvent) => {
        evento.preventDefault();
        
        setTarefas((tarefasAntigas: Tarefa[]) => [...tarefasAntigas, {
            ...estado, 
            selecionado: false, 
            completado: false, 
            id: uuidv4()
        }]);
        setEstado({
            tarefa: "",
            tempo: "00:00:00"
        })
    }   

    return (
        <form className={styles.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={styles.inputContainer}>
                <label htmlFor="tarefa">Adicione uma tarefa</label>
                <input type="text" name="tarefa" id="tarefa" value={estado.tarefa} onChange={(evento) => {setEstado({...estado, tarefa: evento.target.value})}}placeholder="O que você quer estudar?" required/>
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" step="1" min="00:00:00" max="01:30:00" value={estado.tempo} name="tempo" id="tempo" onChange={(evento) => {setEstado({...estado, tempo: evento.target.value})}} required/>
            </div>
            <Botao texto="Adicionar"/>
        </form>
    )
}

export default Formulario;