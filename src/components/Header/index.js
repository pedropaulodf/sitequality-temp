import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiMenu, FiX } from "react-icons/fi";
import ButtonModalClientArea from "../ButtonModalClientArea";

import styles from "./styles.module.scss";

export function Header() {
  const router = useRouter();

  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false);
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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (sizeScreen.width > 1020 && isResponsiveMenuOpen) {
      setIsResponsiveMenuOpen(false);
    }
  }, [sizeScreen.width, isResponsiveMenuOpen]);

  const menuToggleHandler = () => {
    if((!sizeScreen.width || sizeScreen.width > 1020) && isResponsiveMenuOpen) {
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
              <img src="/images/logo.webp" alt="Logo Quality Systems" />
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
