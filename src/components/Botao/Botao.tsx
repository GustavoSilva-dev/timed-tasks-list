import styles from "./style.module.scss"
import { BotaoProps } from "../../types/BotaoProps";

function Botao({ texto, type, onClick }: BotaoProps) {
    return (
        <button onClick={onClick} type={type} className={styles.botao}>{texto}</button>
    )
}

export default Botao;