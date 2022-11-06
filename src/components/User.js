import Logo from "./Logo";

const User = ({ userName }) => {
  return (
    <div className="User">
      <p className="User-name">{userName}</p>
      <div className="User-logo">
        <Logo />
      </div>
    </div>
  );
};

export default User;
