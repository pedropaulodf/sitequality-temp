import Head from "next/head";
import { useState } from "react";
import { Footer } from "../components/Footer";
import HeadCustom from "../components/HeadCustom";
import { ProductItem } from "../components/ProductItem";

import styles from "../styles/Produtos.module.scss";

// array com o menu
const PRODUCT_MENU = [
  {
    title: "Cartões & Suprimentos",
    objName: "cartoesSuprimentos",
    active: true,
  },
  { title: "Catracas", objName: "catracas", active: false },
  { title: "Extensões", objName: "extensoes", active: false },
  { title: "Impressoras", objName: "impressoras", active: false },
  { title: "Laminadoras", objName: "laminadoras", active: false },
  {
    title: "Leitores Biométricos",
    objName: "leitoresBiometricos",
    active: false,
  },
  {
    title: "Leitores de Códigos de Barras",
    objName: "leitoresCodigoBarras",
    active: false,
  },
];

// objeto de produtos
const PRODUCT_LIST = {
  cartoesSuprimentos: [
    {
      name: "LaserNex",
      alt: "LaserNex",
      imagePath: "/images/products/lasernex.png",
    },
    {
      name: "Polaseal",
      alt: "Polaseal",
      imagePath: "/images/products/polaseal.png",
    },
    {
      name: "Cartões PVC",
      alt: "Cartões PVC",
      imagePath: "/images/products/cartoes-pvc.png",
    },
    {
      name: "Ribbons para Impressoras PVC",
      alt: "Ribbons para Impressoras PVC",
      imagePath: "/images/products/ribbons-impressora-pvc.png",
    },
    {
      name: "Kit de Limpeza Impressoras PVC",
      alt: "Kit de Limpeza Impressoras PVC",
      imagePath: "/images/products/kit-limpeza-impressora-pvc.png",
    },
  ],
  catracas: [
    {
      name: "Catraca TopData Revolution",
      alt: "Catraca TopData Revolution",
      imagePath: "/images/products/catraca-topdata-revolution.jpg",
    },
    {
      name: "Catraca TopData Box Inox",
      alt: "Catraca TopData Box Inox",
      imagePath: "/images/products/catraca-topdata-box-inox.jpg",
    },
  ],
  extensoes: [
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
  ],
  impressoras: [
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
  ],
  laminadoras: [
    {
      name: "Laminadora Gazela",
      alt: "Laminadora Gazela",
      imagePath: "/images/products/laminadora-gazela.jpg",
    },
  ],
  leitoresBiometricos: [
    {
      name: "Leitor Biométrico FS-80",
      alt: "Leitor Biométrico FS-80",
      imagePath: "/images/products/leitorBiometrico-fs80.jpg",
    },
  ],
  leitoresCodigoBarras: [
    {
      name: "Leitor de Código de Barras Pistola - Bematech",
      alt: "Leitor de Código de Barras Pistola - Bematech",
      imagePath: "/images/products/leitorCodigoBarras-pistola.jpg",
    },
    {
      name: "Leitor de Código de Barras Manual - CIS",
      alt: "Leitor de Código de Barras Manual - CIS",
      imagePath: "/images/products/leitorCodigoBarras-manual.jpg",
    },
  ],
};

export default function Produtos() {

  const [menuCategories, setMenuCategories] = useState(PRODUCT_MENU);
  const [productsToShow, setProductsToShow] = useState(PRODUCT_LIST.cartoesSuprimentos);

  const handleClickMenuCategories = (objName, index) => {

    // seta todos os actives como false
    const menuSelected = menuCategories.map(menu => (
      {...menu, active: false}
    ));
    
    // seta o menu selecionado como true
    menuSelected[index].active = true;

    // salva os states
    setMenuCategories(menuSelected);
    setProductsToShow(PRODUCT_LIST[objName]);
  };

  return (
    <>
      <HeadCustom pageName="Produtos" />

      <main className={styles.container}>
        <section className={styles.wrapper}>
          <h2>Produtos</h2>
          <div className={styles.content}>
            <div className={styles.menuCategories}>
              <div className={styles.boxTopTitles}>
                <h3>Filtros</h3>
                <p>Selecione uma categoria:</p>
              </div>
              <ul>
                {menuCategories.map((menu, index) => (
                  <li
                    key={index}
                    onClick={() => handleClickMenuCategories(menu.objName, index)}
                    className={`${menu.active && styles.categoryActive}`}
                  >
                    {menu.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.boxProducts}>
              {productsToShow.map((product, index) => (
                <ProductItem
                  key={index}
                  name={product.name}
                  alt={product.alt}
                  imagePath={product.imagePath}
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
