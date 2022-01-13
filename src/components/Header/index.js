import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import ButtonModalClientArea from "../ButtonModalClientArea";

import styles from "./styles.module.scss";

export function Header() {
  const router = useRouter();

  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false);
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const [sizeScreen, setSizeScreen] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSizeScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // TEMA

    // Verifica se é a primeira vez que a pessoa acessa e seta o tema no storage como light, que é o tema padrão
    const temeSelected = localStorage.getItem("theme");
    if (temeSelected === null) {
      localStorage.setItem("theme", "light");
      
      // dark mode is active?
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setIsDarkModeActive(true);
      }

    } else {
      document.body.dataset.theme = temeSelected;
      if (temeSelected === "dark") {
        setIsDarkModeActive(true);
      }
    }

    // Lida com a troca de tema automatica
    const handleDarkMode = (e) => {
      const newColorScheme = e.matches ? "dark" : "light";
      setIsDarkModeActive(newColorScheme === "dark" ? true : false);
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleDarkMode);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("change", handleDarkMode);
    };
  }, []);

  useEffect(() => {
    if (sizeScreen.width > 1020 && isResponsiveMenuOpen) {
      setIsResponsiveMenuOpen(false);
    }
  }, [sizeScreen.width, isResponsiveMenuOpen]);

  useEffect(() => {
    if (isDarkModeActive) {
      localStorage.setItem("theme", "dark");
      document.body.dataset.theme = "dark";
    } else {
      localStorage.setItem("theme", "light");
      document.body.dataset.theme = "light";
    }

    return () => {};
  }, [isDarkModeActive]);

  const menuToggleHandler = () => {
    if (
      (!sizeScreen.width || sizeScreen.width > 1020) &&
      isResponsiveMenuOpen
    ) {
      setIsResponsiveMenuOpen(false);
      return;
    }
    setIsResponsiveMenuOpen((open) => !open);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__content__logo}>
          <Link href="/">
            <a>
              <img
                src={
                  isDarkModeActive
                    ? "/images/logoWhite.webp"
                    : "/images/logo.webp"
                }
                alt="Logo Quality Systems"
              />
            </a>
          </Link>
        </div>
        <nav
          className={`${styles.header__content__nav} ${
            isResponsiveMenuOpen ? styles.isMenu : ""
          }`}
        >
          <ul>
            <li>
              {isDarkModeActive ? (
                <div className={styles.themeColor} onClick={() => setIsDarkModeActive(false)} data-tooltip={"Tema claro"} data-flow="left" >
                  <FiSun color="#ffffff"/>
                </div>
              ) : (
                <div className={styles.themeColor} onClick={() => setIsDarkModeActive(true)} data-tooltip={"Tema escuro"} data-flow="left" >
                  <FiMoon />
                </div>
              )}
            </li>
          </ul>

          <ul>
            <li>
              <Link href="/">
                <a
                  className={router.pathname === "/" ? styles.active : ""}
                  onClick={menuToggleHandler}
                >
                  Início
                </a>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link href="/sobre">
                <a
                  className={router.pathname === "/sobre" ? styles.active : ""}
                  onClick={menuToggleHandler}
                >
                  Sobre a Quality
                </a>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link href="/produtos">
                <a
                  className={
                    router.pathname === "/produtos" ? styles.active : ""
                  }
                  onClick={menuToggleHandler}
                >
                  Produtos
                </a>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link href="/contato">
                <a
                  className={
                    router.pathname === "/contato" ? styles.active : ""
                  }
                  onClick={menuToggleHandler}
                >
                  Contato
                </a>
              </Link>
            </li>
          </ul>
          <div>
            <ButtonModalClientArea handleCloseMenu={menuToggleHandler} />
          </div>
        </nav>
        <div className={styles.header__content__toggle}>
          {isResponsiveMenuOpen ? (
            <FiX onClick={menuToggleHandler} />
          ) : (
            <FiMenu onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>

    // <header className={styles.container}>
    //   <div className={styles.wrapper}>
    //   <Link href="/" ><a><img src="/images/logo.png" alt="Logo Quality Systems" /></a></Link>
    //     <nav>
    //       <Link href="/" ><a className={router.pathname === '/' ? styles.active : ''}>Início</a></Link>
    //       <Link href="/sobre" ><a className={router.pathname === '/sobre' ? styles.active : ''}>Sobre a Quality</a></Link>
    //       <Link href="/produtos" ><a className={router.pathname === '/produtos' ? styles.active : ''}>Produtos</a></Link>
    //       <Link href="/contato" ><a className={router.pathname === '/contato' ? styles.active : ''}>Contato</a></Link>
    //     </nav>
    //     <ButtonModalClientArea/>
    //   </div>
    // </header>
  );
}
