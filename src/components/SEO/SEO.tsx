import Head from "next/head";
import { ReactNode } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
  children?: ReactNode;
}

const defaultSEO = {
  title:
    "Rodrigo Kunrath | Portfólio Desenvolvedor Fullstack | React, Next.js, TypeScript",
  description:
    "Desenvolvedor Fullstack especializado em React, Next.js, TypeScript e tecnologias modernas da web. Veja meu portfólio de projetos inovadores e entre em contato para oportunidades de colaboração.",
  keywords:
    "Desenvolvedor Fullstack, Desenvolvedor React, Desenvolvedor Next.js, Desenvolvedor TypeScript, Desenvolvedor Web, Desenvolvedor Frontend, Desenvolvedor Backend, Portfólio, Rodrigo Kunrath",
  image: "https://portfolio-tan-sigma-e79hkh9jwa.vercel.app/assets/skills/profile.jpeg",
  url: "https://portfolio-tan-sigma-e79hkh9jwa.vercel.app",
  type: "website" as const,
  author: "Rodrigo Kunrath",
};

export const SEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = defaultSEO.type,
  author = defaultSEO.author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  children,
}) => {
  const siteName = "Rodrigo Kunrath Portfólio";
  const twitterHandle = "@rodrigokunrath";

  // Default structured data if none provided
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rodrigo Kunrath",
    jobTitle: "Desenvolvedor Fullstack",
    description: description,
    url: url,
    image: image,
    sameAs: [
      "https://github.com/Dkunrath",
      "https://www.linkedin.com/in/rodrigo-kunrath-642884164/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "SQL",
      "Desenvolvimento Fullstack",
      "Desenvolvimento Web",
      "Desenvolvimento Frontend",
      "Desenvolvimento Backend",
      "Tecnologias Modernas da Web",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance Developer",
    },
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      {author && <meta property="og:author" content={author} />}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={twitterHandle} />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
      <meta name="application-name" content={siteName} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData),
        }}
      />

      {children}
    </Head>
  );
};
