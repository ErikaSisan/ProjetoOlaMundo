import styles from './SobreMim.module.css';
import PostModelo from 'Componentes/PostModelo';
import fotoCapa from 'assets/sobre-mim-capa.png';
import fotoSobreMim from 'assets/sobre-mim-foto.png';

export default function SobreMim(){
    return(
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
         <h3 className={styles.subtitulo}>
            Olá, eu sou a Érika Sisan!
         </h3>

         <img
            src={fotoSobreMim}
            alt='Foto da Érika'
            className={styles.fotoSobreMim}
         />

        <p className={styles.paragrafo}>Oi, tudo bem? Eu sou estudante de Front-end e estou feliz em ver você por aqui :)</p>
        <p className={styles.paragrafo}>Minha jornada na programação começou no Instituto Federal de Brasília (IFB), onde concluí o ensino superior em Sistemas para Internet. Durante o curso, aprendi lógica de programação e explorei diversas linguagens, como Java, Python, JavaScript. Gostei muito dessa área e sigo estudando para me aprofundar cada vez mais.</p>

        </PostModelo>
    )
}