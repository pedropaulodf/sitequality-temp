import { FiSliders, FiThumbsUp } from "react-icons/fi";

import { AccordionRA } from "../components/AccordionRA";
import { BoxIconLeft } from "../components/BoxIconLeft";
import { ButtonGreen } from "../components/ButtonGreen";
import Clientes from "./clientes.tsx";
import { Footer } from "../components/Footer";
import HeadCustom from "../components/HeadCustom";
import Image from "next/image";
import Link from "next/link";
import SlideShow from "../components/SlideShow";
import SlideShowVertical from "../components/SlideShowVertical";
import styles from "../styles/Index.module.scss";

export default function Home() {
  return (
    <>
      <HeadCustom
        pageName="Quality Systems"
        description="Sistema para Parques e Clubes"
      />

      <main className={styles.container}>
        {/* BANNER */}
        <section className={styles.wrapperBanner}>
          <div className={styles.banner}>
            <div className={styles.info}>
              <h1>O Quality ERP</h1>
              <p>
                Solução integrada de software e hardware para clubes, parques e
                afins. A solução é dividida por módulos que poderão ser
                compostos conforme a característica do ambiente, capacidade de
                investimento e viabilidade de operação de cada empreendimento,
                havendo a possibilidade de mudança ao longo do seu uso.
              </p>
              <a href="#saibamais">
                <button type="button">Clique e saiba mais</button>
              </a>
            </div>
            <div className={styles.sliderWrapper}>
              <div className={styles.bgSliderCircle}></div>
              <div className={styles.slider}>
                <SlideShow />
              </div>
            </div>
          </div>
        </section>

        {/* APP DO SOCIO */}
        <section className={styles.wrapperSliderApp}>
          <div className={styles.strip}>
            <div className={styles.sliderWrapper}>
              {/* <div className={styles.bgSliderCircle}></div> */}
              <div className={styles.slider}>
                <SlideShowVertical />
              </div>
            </div>
            <div className={styles.info}>
              <h1>Aplicativo do Sócio</h1>
              <p>
                Tenha o <strong>aplicativo personalizado</strong> do seu clube,
                que proporciona aos seus sócios vários benefícios e facilidades,
                como: gerenciar seus dados de pagamentos, dependentes, dados
                pessoais, notícias do clube e muito mais. O App do Sócio gera a{" "}
                <strong>confiança</strong> e<strong> agilidade</strong> que seu
                clube precisa!
              </p>
              <div>
                <strong>Alguns recursos do App do Sócio:</strong>
                <ul>
                  <li>Aplicativos disponíveis para Android e iOS;</li>
                  <li>Carteirinha digital, via QR Code, na palma da mão;</li>
                  <li>Gerenciar as carteirinhas dos dependentes do sócio;</li>
                  <li>Gerenciar todos os débitos diretamente do celular;</li>
                  <li>Gerenciar Convites;</li>
                  <li>Fazer Reservas;</li>
                  <li>Realizar Recargas do pré-pago;</li>
                  <li>Pagamentos via Boleto e PIX;</li>
                  <li>Consultar seu consumo;</li>
                  <li>Notificações de Movimentações via Push;</li>
                  <li>Modalidades e Treinos;</li>
                  <li>White Label e vários outros recursos!</li>
                </ul>
              </div>
              <div className={styles.appStoreBadges}>
                <Link
                  href="https://play.google.com/store/apps/developer?id=Quality+Systems+LTDA&hl=pt-BR"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    width={138}
                    height={47}
                    src="/images/googlePlayBadge.png"
                    alt="Google Play Store"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/gb/developer/quality-systems/id1531946818#see-all/i-phone-apps"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    width={138}
                    height={47}
                    src="/images/appStoreBadge.png"
                    alt="Google Play Store"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENTES */}

        <Clientes />

        {/* DIFERENCIAIS */}
        <section className={styles.wrapperDiferentials}>
          <div className={styles.content}>
            <h3>Diferenciais</h3>
            <div className={styles.gridBoxes}>
              <BoxIconLeft
                icon={<FiThumbsUp />}
                title="Suporte garantido!"
                content="Conte com nosso suporte com anos de experiência e treinamento completo para utilização do sistema."
              />
              <BoxIconLeft
                icon={<FiSliders />}
                title="Alta Parametrização"
                content="O sistema foi desenvolvido para se adaptar à todas as necessidades, com um alto nível de parametrização, atendendo a todas as exigências do seu negócio."
              />
            </div>
          </div>
        </section>

        {/* RECURSOS */}
        <section className={styles.wrapperResources}>
          <div className={styles.content}>
            <h3>Conheça os Recursos</h3>
            <div className={styles.grid}>
              <div className={styles.imgResources}>
                <Image
                width={368}
                height={523}
                src="/images/recursos.webp" alt="Recursos" />
                {/* <ButtonOutlined href="/produtos" text="Veja todos os produtos" /> */}
              </div>
              <div>
                <AccordionRA />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Botão CTA */}
      <div className={styles.btnGreenContact}>
        <ButtonGreen
          href="/contato"
          text="Clique aqui e agende uma demonstração!"
        />
      </div>

      <Footer />
    </>
  );
}
