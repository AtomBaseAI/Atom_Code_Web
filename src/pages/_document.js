import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en" oncontextmenu="return false">
      <Head>
        <meta charSet="utf-8" />
        <title>Atom Code</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Welcome to Atom Code Dev" />
        <meta name="keywords" content="Saas, Software, Mobile Application Development, Android App Development, IOS App Development,Nodejs Apps,MERN & MEAN Apps, Best website development Company in Erode & Coimbatore, Best Mobile App development Company in Erode & Coimbatore, Best Raining Center in Erode & Coimbatore, Best SEO Service Provider in Tamilnadu, Best Social Media Marketing Provider in Tamilnadu, Best Php Software development company, AWS training Center in erode & Coimbatore, Best software company in Erode,Best software company in Coimbatore, Top software company in Erode" />
        <meta name="author" content="NODEHIVE LABS" />
        <meta name="website" content="https://www.atomcode.dev" />
        <meta property="og:site_name" content="Atom Code" />
        <meta property="og:title" content="Atom Code" />
        <meta property="og:description" content="Welcome to Atom Code Dev" />
        <meta property="og:image" content="https://ik.imagekit.io/nodehive/hive/nodehive.jpg" />
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
