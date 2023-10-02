import { Footer } from "../components/Footer";
import Head from "next/head";
import HeadCustom from "../components/HeadCustom";
import Image from "next/image";
import styles from "../styles/Sobre.module.scss";

export default function Sobre() {
  // array com as logos das tecnologias
  const TECH_LOGOS = [
    {
      alt: "Logo SQL Server",
      imagemPath: "/images/techLogos/logo-sqlserver.png",
    },
    { alt: "Logo ASP.net", imagemPath: "/images/techLogos/logo-aspnet.png" },
    { alt: "Logo Dot.net", imagemPath: "/images/techLogos/logo-dotnet.png" },
    { alt: "Logo C#", imagemPath: "/images/techLogos/logo-csharp.png" },
    { alt: "Logo ReactJS", imagemPath: "/images/techLogos/logo-react.png" },
    { alt: "Logo React Native", imagemPath: "/images/techLogos/logo-rn.png" },
  ];

  const PARCEIROS_LOGOS = [
    {
      alt: "Stone Official Partner",
      imagemPath: "/images/parceirosLogos/stone-partner.png",
    },
  ];

  return (
    <>
      <HeadCustom pageName="Sobre" />

      <main className={styles.container}>
        <section className={styles.wrapper}>
          <h2>Sobre</h2>
          <div className={styles.content}>
            <div className={styles.about}>
              <h3>A Quality Systems</h3>
              <p>
                Desde a sua fundação em 1990, a Quality Systems vem oferecendo
                soluções inovadoras para gestão e automação de clubes,
                agremiações, sindicatos e academias.
              </p>
              <p>
                A empresa possui mais de 200 clientes nos estados de São Paulo,
                Minas Gerais, Goiás, Paraná e Distrito Federal.
              </p>
              <p>
                Seu diferencial é a parceria criada com cada cliente, oferecendo
                soluções customizadas com atendimento personalizado.
              </p>
            </div>
            <div className={styles.focus}>
              <h3>Nosso Foco:</h3>
              <h4>Suporte & Qualidade</h4>
              <p>
                A Quality Systems tem como compromisso o suporte total de todos
                os produtos e serviços oferecidos.
              </p>
              <p>
                Nossa equipe é treinada e preparada para atender qualquer
                solicitação de suporte.
              </p>
            </div>
          </div>
          <div className={styles.technologies}>
            <h3>Tecnologias</h3>
            <div className={styles.techLogoBox}>
              {TECH_LOGOS.map((tech, index) => (
                <Image width={100} height={100} key={index} src={tech.imagemPath} alt={tech.alt} />
              ))}
            </div>
          </div>
          <div className={styles.parceiros}>
            <h3>Certificados</h3>
            <div className={styles.parceirosLogoBox}>
              {PARCEIROS_LOGOS.map((parceiro, index) => (
                <Image width={100} height={100} key={index} src={parceiro.imagemPath} alt={parceiro.alt} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
