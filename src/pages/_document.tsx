import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Favicon - Using custom SVG for better visibility */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/skills/rk.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/skills/rk.png" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/skills/rk.png" />
        
        {/* Meta tags for better SEO */}
        <meta name="description" content="Portfolio - Desenvolvedor Full Stack" />
        <meta name="keywords" content="desenvolvedor, full stack, react, next.js, portfolio" />
        <meta name="author" content="RK" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-tan-sigma-e79hkh9jwa.vercel.app/" />
        <meta property="og:title" content="Rodrigo Kunrath | Portfolio Desenvolvedor Full Stack" />
        <meta property="og:description" content="Desenvolvedor Full Stack especializado em React, Next.js, Node.js e tecnologias modernas. Confira meus projetos e experiência." />
        <meta property="og:image" content="https://portfolio-tan-sigma-e79hkh9jwa.vercel.app/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Rodrigo Kunrath - Desenvolvedor Full Stack" />
        <meta property="og:site_name" content="Rodrigo Kunrath Portfolio" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://portfolio-tan-sigma-e79hkh9jwa.vercel.app/" />
        <meta name="twitter:title" content="Rodrigo Kunrath | Portfolio Desenvolvedor Full Stack" />
        <meta name="twitter:description" content="Desenvolvedor Full Stack especializado em React, Next.js, Node.js e tecnologias modernas." />
        <meta name="twitter:image" content="https://portfolio-tan-sigma-e79hkh9jwa.vercel.app/og-image.svg" />
        <meta name="twitter:image:alt" content="Rodrigo Kunrath - Desenvolvedor Full Stack" />
        
        {/* WhatsApp specific */}
        <meta property="whatsapp:title" content="Rodrigo Kunrath | Portfolio Desenvolvedor" />
        <meta property="whatsapp:description" content="Confira o portfolio do desenvolvedor Full Stack Rodrigo Kunrath" />
        <meta property="whatsapp:image" content="https://portfolio-tan-sigma-e79hkh9jwa.vercel.app/og-image.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
