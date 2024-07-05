import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo-colorido.png';
import minhaFoto from 'assets/minha-foto.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.titulo}>
            Olá Mundo!</h1>
        <p className={styles.paragrafo}>
            Boas vindas ao meu espaço pessoal! Eu sou a Érika Sisan, formada em Sistemas para Internet e estudante. Aqui compartilho vários conhecimentos :)
        </p>
        </div>
        <div className={styles.imagens}>
            <img 
            className={styles.circuloColorido}
            src={circuloColorido}
            alt="" 
            aria-hidden={true}
            />

            <img
            className={styles.minhaFoto}
            src={minhaFoto}
            alt="Foto da Érika"
            />
        </div>

    </div>
  );
}
