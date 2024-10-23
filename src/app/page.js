import Card from "../components/card/Card";
import styles from "./page.module.css";
import  Menu from "../components/menu/Menu";

export default function Home() {
  return (
    <main>
      <Menu/>
      <h1 className={styles.titulo}>Qual filme é melhor?</h1>
      <section className={styles.filmes}>
        <Card url="https://br.web.img2.acsta.net/medias/nmedia/18/91/54/04/20150812.jpg"/>
        <Card url="https://play-lh.googleusercontent.com/QrSBQU8p6TijnsH2EfDpBfneddIP6JVYR4bSKyacA-cyIiYZQqdiryOTMkwqxxnfvfaL9UOhIo8-3XI2MWvQ"/>
      </section>
    </main>
  );
}
