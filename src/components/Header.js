import User from "./User";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-container">
        <h1>My Bank</h1>
        <div />
        <User userName="Etienne" />
      </div>
    </header>
  );
};

export default Header;
