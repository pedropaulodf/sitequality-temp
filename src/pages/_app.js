import { Header } from "../components/Header";
import { ToastContainer } from "react-toastify";
// import { useRouter } from "next/router";
import "../styles/globals/globals.scss";
import "../styles/globals/reactTelInput.scss";
import "../styles/globals/toolTip.scss";
import 'react-slideshow-image/dist/styles.css';

// o _app RODA TODA VEZ QUE ALGUÉM CLICA NUMA ROTA
function MyApp({ Component, pageProps }) {

  // const router = useRouter();

  // // Verifica se é a página de termos, se sim, tira o menu
  // // O footer da página privacidade também está comentado lá no código da página
  // if(router.pathname === "/novo/privacidade.html"){
  //   return (
  //     <>
  //       {/* <Header /> */}
  //       <Component {...pageProps} />
  //     </>
  //   );
  // }

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
