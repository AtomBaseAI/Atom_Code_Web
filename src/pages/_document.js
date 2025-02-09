import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en" oncontextmenu="return false">
      <Head>
        <meta charSet="utf-8" />
        <title>Atom Code</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Welcome to Atom Code Dev" />
        <meta name="keywords" content="Solutions for Empowering Future Talent" />
        <meta name="author" content="NODEHIVE LABS" />
        <meta name="website" content="https://www.atomcode.dev" />
        <meta property="og:site_name" content="Atom Code" />
        <meta property="og:title" content="Atom Code" />
        <meta property="og:description" content="Welcome to Atom Code Dev" />
        <meta property="og:image" content="https://ik.imagekit.io/atominc/ATOMCODE_Web/ATOMCODE%20LOGO%20MINI%20512X512.png?updatedAt=1739078800812" />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content={300} />
        <meta property="og:image:height" content={300} />
        <meta property="og:url" content="https://atomcode.dev" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
