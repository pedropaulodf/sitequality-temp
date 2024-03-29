import Link from "next/link";
import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.bgLogo}>
          <Link href="/" className={styles.navLink}>
            <img src="/images/logoWhite.png" alt="Logo Quality Systems" />
          </Link>
        </div>
        <div className={styles.stoneLogo}>
          <img
            src="https://storage.googleapis.com/partnerhub_partner_badges_prod/L_641cc7353887840019614783.png"
            alt="Stone Partner Badge"
          />
        </div>
      </div>
      <div className={styles.bgRights}>
        <p>
          © Quality Systems LTDA • Todos os direitos reservados •{" "}
          <Link href="/novo/privacidade.html">Política de privacidade</Link> •{" "}
          {new Date().getFullYear()}
          <br />
          <Link
            href="https://pedropaulo.dev"
            target="_blank"
            style={{ opacity: 0.6, fontSize: 14 }}
          >
            Criado por: PedroPaulo.dev
          </Link>
        </p>
      </div>
    </footer>
  );
}
