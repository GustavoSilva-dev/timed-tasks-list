import { useState } from 'react'
import { Tarefa } from '../types/Tarefa'
import Formulario from '../components/Formulario/Formulario'
import Lista from '../components/Lista/Lista'
import Cronometro from '../components/Cronometro/Cronometro'

import styles from "./style.module.scss"

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [selecionado, setSelecionado] = useState<Tarefa>();


  const selecionaTarefa = (tarefaSelecionada: Tarefa) => {
    setSelecionado(tarefaSelecionada);

    setTarefas((tarefas) => tarefas.map((tarefa) => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  const finalizarTarefa = () => {
    if(selecionado){
      setSelecionado(undefined);
      setTarefas((tarefasAnteriores) => tarefasAnteriores.map((tarefa) => {
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  )
}

export default App
