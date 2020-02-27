import Navbar from "./NavBar";
import Head from "next/head";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
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
  </>
);

export default DefaultLayout;
