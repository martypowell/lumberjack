import Navbar from "../components/NavBar";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const DefaultLayout = ({ children, ...rest }) => (
  <>
    <div style={layoutStyle} {...rest}>
      <Navbar />
      {children}
    </div>
    <style jsx global>{`
      h1,
      h2,
      h3 {
        font-family: "Arial";
      }
    `}</style>
  </>
);

export default DefaultLayout;
