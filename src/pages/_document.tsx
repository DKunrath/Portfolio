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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
