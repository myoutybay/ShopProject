import "./Button.scss";

const Button = (props) => {
  return (
    <button
      data-sidebar="gradient-3"
      className={"button" + (props.class ? " " + props.class : "")}
      size={props.size}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
const HeaderButton = ({ icon, alt, onClick }) => {
  return (
    <div className="header-button-wrap" onClick={onClick}>
      <img className="header-button-icon" src={icon} alt={alt} />
    </div>
  );
};
const NavButton = ({ icon, alt, onClick }) => {
  return (
    <div className="nav-button-wrap" onClick={onClick}>
      <img className="nav-button-icon" src={icon} alt={alt} />
    </div>
  );
};

export { Button, HeaderButton, NavButton };
