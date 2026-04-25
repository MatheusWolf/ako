import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vako</title>
        <meta name="description" content="Você encontrou a Vako cedo demais." />
      </Head>

      <main className={styles.container}>
        <div className={styles.card}>
          <div className={styles.badge}>
            🔓 Achievement Unlocked: Early Visitor
          </div>

          <div className={styles.logo}></div>

          <h1>Olá, jovem.</h1>

          <p>
            Você encontrou no <strong>Vako</strong> cedo demais. Ainda está tudo
            meio <strong>vazio</strong> por aqui.
          </p>

          <p>Estamos preenchendo essa área... mas logo será a sua vez.</p>

          <span className={styles.footer}>Vako • Em construção</span>
        </div>
      </main>
    </>
  );
}
