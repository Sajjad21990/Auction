import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingLeft: "5rem" }}>{children}</div>
    </div>
  );
};

export default Layout;
