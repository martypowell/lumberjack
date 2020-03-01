import Navbar from "./NavBar";
import Head from "next/head";

const layoutStyle = {
  margin: 20,
  padding: 20
};

const DefaultLayout = ({ children, ...rest }) => (
  <>
    <Head>
      <title>LumberJack</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    <div style={layoutStyle} {...rest}>
      <Navbar />
      {children}
    </div>
    <style jsx global>{`
      body {
        background: #f5f5f5;
      }
    `}</style>
  </>
);

export default DefaultLayout;
