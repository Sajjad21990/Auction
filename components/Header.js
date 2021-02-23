const Header = ({ title }) => {
  return (
    <div
      className="create-header"
      style={{
        textAlign: "center",
        padding: "3vh 0",
        width: "calc(100vw - 5rem)",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
