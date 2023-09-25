import { useState } from "react";
import { Footer } from "../components/Footer";
import HeadCustom from "../components/HeadCustom";
import { SolucaoItem, SolucaoItemProps } from "../components/SolucaoItem";

import styles from "../styles/Solucoes.module.scss";

// array com o menu
const PRODUCT_MENU = [
  {
    title: "Gestão Completa",
    objName: "gestaoCompleta",
    active: true,
  },
  {
    title: "Financeiro",
    objName: "financeiro",
    active: false,
  },
  {
    title: "Controle de Acesso / Estacionamento",
    objName: "controleAcesso",
    active: false,
  },
  { title: "Consumo", objName: "consumo", active: false },
  { title: "PDV Completo", objName: "pdv", active: false },
  { title: "APP do Sócio", objName: "appSocio", active: false },
  {
    title: "Integrações",
    objName: "integracoes",
    active: false,
  },
];

// objeto de produtos
const PRODUCT_LIST = {
  gestaoCompleta: [
    {
      name: "Gestão Completa",
      text: [
        "Controle de estoque",
        "Controle de academia",
        "Matrículas / Escolinhas",
        "Reserva de locais e eventos",
        "Gestão completa de associados e convidados",
        "Alta parametrização",
      ],
    },
  ] as SolucaoItemProps[],
  financeiro: [
    {
      name: "Gestão Financeira",
      text: [
        "Gestão de contas à pagar / receber",
        "Cobrança Bancária",
        "Módulo de Contratos",
        "PIX integrado com os principais bancos",
        "Conciliação bancária",
        "Controle de Mensalidades",
        "Integração com boletos / arquivos remessa",
        "Integração com boletos via API (Santander / Sicoob)",
        "Importação de Notas Fiscais via XML",
      ],
    },
  ] as SolucaoItemProps[],
  controleAcesso: [
    {
      name: "Catraca TopData Revolution",
      alt: "Catraca TopData Revolution",
      text: [
        "Controle de acesso integrado com catracas, cancelas e smartphones",
        "Controle de acesso integrado com catracas, cancelas e smartphones",
        "Controle de acesso integrado com catracas, cancelas e smartphones",
        "Controle de acesso integrado com catracas, cancelas e smartphones",
        "Controle de acesso integrado com catracas, cancelas e smartphones",
      ],
    },
    {
      name: "Catraca TopData Box Inox",
      alt: "Catraca TopData Box Inox",
      imagePath: "/images/products/catraca-topdata-box-inox.jpg",
    },
  ] as SolucaoItemProps[],
  consumo: [
    {
      name: "Cabo Extensor VGA 10 Metros",
      alt: "Cabo Extensor VGA 10 Metros",
      imagePath: "/images/products/extensao-vga.jpg",
    },
    {
      name: "Cabo Extensor USB 2.0 com amplificador 10 metros",
      alt: "Cabo Extensor USB 2.0 com amplificador 10 metros",
      imagePath: "/images/products/extensao-usb.jpg",
    },
  ] as SolucaoItemProps[],
  pdv: [
    {
      name: "DTC1000 Dual Side",
      alt: "DTC1000 Dual Side",
      imagePath: "/images/products/impressora-dualside-akad.jpg",
    },
    {
      name: "Bematech MP-4200 TH - Não Fiscal",
      alt: "Bematech MP-4200 TH - Não Fiscal",
      imagePath: "/images/products/impressoras-bematech.jpg",
    },
    {
      name: "DTC1000 SIMPLE",
      alt: "DTC1000 SIMPLE",
      imagePath: "/images/products/impressora-simple-akad.png",
    },
    {
      name: "DataCard SD-260",
      alt: "DataCard SD-260",
      imagePath: "/images/products/impressora-sd-akad.jpg",
    },
  ] as SolucaoItemProps[],
  appSocio: [
    {
      name: "Laminadora Gazela",
      alt: "Laminadora Gazela",
      imagePath: "/images/products/laminadora-gazela.jpg",
    },
  ] as SolucaoItemProps[],
  integracoes: [
    {
      name: "Leitor Biométrico FS-80",
      alt: "Leitor Biométrico FS-80",
      imagePath: "/images/products/leitorBiometrico-fs80.jpg",
    },
  ] as SolucaoItemProps[],
};

export default function Solucoes() {
  const [menuCategories, setMenuCategories] = useState(PRODUCT_MENU);
  const [productsToShow, setProductsToShow] = useState(
    PRODUCT_LIST.gestaoCompleta
  );

  const handleClickMenuCategories = (objName, index) => {
    // seta todos os actives como false
    const menuSelected = menuCategories.map((menu) => ({
      ...menu,
      active: false,
    }));

    // seta o menu selecionado como true
    menuSelected[index].active = true;

    // salva os states
    setMenuCategories(menuSelected);
    setProductsToShow(PRODUCT_LIST[objName]);
  };

  return (
    <>
      <HeadCustom pageName="Nossas Soluções" />

      <main className={styles.container}>
        <section className={styles.wrapper}>
          <h2>Nossas Soluções</h2>
          <div className={styles.content}>
            <div className={styles.menuCategories}>
              <ul>
                {menuCategories.map((menu, index) => (
                  <a key={`cat-${menu.objName}`} href={`#${menu.objName}`}>
                    <li
                      key={index}
                      onClick={() =>
                        handleClickMenuCategories(menu.objName, index)
                      }
                      className={`${
                        menu.active ? styles.categoryActive : undefined
                      }`}
                    >
                      {menu.title}
                    </li>
                  </a>
                ))}
              </ul>
            </div>

            <div>
              {productsToShow?.map((product, index) => (
                <SolucaoItem
                  key={index}
                  name={product.name}
                  alt={product.alt}
                  imagePath={product.imagePath}
                  text={product.text}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
