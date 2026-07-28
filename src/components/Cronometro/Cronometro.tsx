import Botao from "../Botao/Botao";
import Relogio from "./Relogio/Relogio";
import styles from "./style.module.scss"
import { tempoParaSegundos } from "../../utils/time";
import { Tarefa } from "../../types/Tarefa";
import { useEffect, useState } from "react";

interface Props {
    selecionado: Tarefa | undefined,
    finalizarTarefa: () => void 
}

function Cronometro({ selecionado, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    const regressiva = (contador: number = 0) => {
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1);
                return regressiva(contador - 1);
            } else {
                finalizarTarefa();
            }
        }, 1000)
    }
    
    
    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronometro!</p>
            <div className={styles.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => regressiva(tempo)}texto="Começar!"/>
        </div>
    )
}

export default Cronometro;