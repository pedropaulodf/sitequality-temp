import Head from "next/head";

interface HeadCustomProps {
  pageName: string;
  description?: string;
}

export default function HeadCustom({ pageName, description }: HeadCustomProps) {
  return (
    <Head>
      <title>{`${pageName} - ${description || "Quality Systems"}`}</title>
      <meta
        name="description"
        content="Desde a sua fundação, em 1990, a Quality Systems vem oferecendo soluções inovadoras para gestão e automação de clubes, agremiações, sindicatos e academias. A empresa possui mais de 200 clientes nos estados de São Paulo, Minas Gerais, Goiás, Paraná e Distrito Federal."
      />
      <meta
        name="keywords"
        content="sistema, gestao, clubes, academias, automacao, web, quality, systems, desenvolvimento, agremiacoes"
      />
       
      <meta name="author" content="pedropaulo.dev" />
      <meta property="og:type" content="page" />
      <meta property="og:url" content="http://www.qualitysys.com.br/" />
      <meta property="og:title" content="Quality Systems" />
      <meta
        property="og:image"
        content="https://sitequalityportfolio.vercel.app/images/metaogimage.png"
      />
       
      <meta
        property="og:description"
        content="Desde a sua fundação, em 1990, a Quality Systems vem oferecendo soluções inovadoras para gestão e automação de clubes, agremiações, sindicatos e academias. A empresa possui mais de 200 clientes nos estados de São Paulo, Minas Gerais, Goiás, Paraná e Distrito Federal."
      />
      <meta property="article:author" content="Quality Systems" />
      <meta
        name="twitter:description"
        content="Desde a sua fundação, em 1990, a Quality Systems vem oferecendo soluções inovadoras para gestão e automação de clubes, agremiações, sindicatos e academias. A empresa possui mais de 200 clientes nos estados de São Paulo, Minas Gerais, Goiás, Paraná e Distrito Federal."
      />
    </Head>
  );
}
