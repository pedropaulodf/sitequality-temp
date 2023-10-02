import { BoxNumber } from "../components/BoxNumber";
import { ButtonGreen } from "../components/ButtonGreen";
import { Carousel } from "../components/Carousel";
import HeadCustom from "../components/HeadCustom";
import styles from "../styles/Index.module.scss";

const Clientes = () => {
  return (
    <>
      <HeadCustom pageName="Clientes" />
      <main className={styles.container}>
        <section className={styles.wrapperCustomers} id="clientes">
          <div className={styles.content}>
            <h3>Clientes que confiam na Quality!</h3>
            <div className={styles.sliderWrapper}>
              <div className={styles.slider}>
                <Carousel interval={2500} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.wrapperWhyQuality} id="saibamais">
          <div className={styles.content}>
            <h3>Por quê o Quality Automação de Clubes?</h3>
            <div className={styles.gridBoxes}>
              <BoxNumber
                topBox="1"
                title="Flexível"
                content="A sua flexibilidade, resultado de um alto nível de parametrização, permite que ele se adapte às características de cada clube, atendendo a todas as exigências do estatuto."
              />
              <BoxNumber
                topBox="2"
                title="Completo"
                content="Em todos os seus relatórios, o sistema oferece diversas opções para seleção de registros, sequências de ordenações e formas de totalização."
              />
              <BoxNumber
                topBox="3"
                title="Confiável"
                content="Anos de experiência de atuação no mercado inseridos em um software robusto e confiável usado por mais de 200 clientes únicos espalhados pelo país."
              />
            </div>
          </div>
        </section>

        <div className={styles.btnGreenContact}>
          <ButtonGreen
            href="/contato"
            text="Clique aqui e agende uma demonstração!"
          />
        </div>
      </main>
    </>
  );
};

export default Clientes;
