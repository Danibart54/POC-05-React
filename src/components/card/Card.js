import styles from "./card.module.css";

function Card({url}){
    console.log(url);
    return (
        <article className={styles.poster}>
            <img className={styles.imagem} src={url} />
            <button>clique</button>
        </article>
    )
}

export default Card;