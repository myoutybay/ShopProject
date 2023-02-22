// import SimpleReactFooter from "simple-react-footer";
import "./Footer.scss";
import logo from "../../logo.svg";
import social from "../../assets/images/astronaut.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const Navigation = useNavigate();
  const columns = [
    {
      title: "Resources",
      resources: [
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Careers",
          link: "/careers",
        },
        {
          name: "Contact",
          link: "/contact",
        },
        {
          name: "Admin",
          link: "/admin",
        },
      ],
    },
    {
      title: "Legal",
      resources: [
        {
          name: "Privacy",
          link: "/privacy",
        },
        {
          name: "Terms",
          link: "/terms",
        },
      ],
    },
    {
      title: "Visit",
      resources: [
        {
          name: "Locations",
          link: "/locations",
        },
        {
          name: "Culture",
          link: "/culture",
        },
      ],
    },
  ];
  return (
    <footer className="basic-footer">
      <div className="footer-container">
        <div className="footer-left">
          <img className="footer-logo" src={logo} alt="Logo" />
        </div>
        <div className="footer-right">
          <div className="footer-categories">
            <h2>Category</h2>
            {columns
              .find((item) => item.title === "Resources")
              .resources.map(({ name, link }, key) => (
                <p key={key} onClick={() => Navigation(link)}>
                  {name}
                </p>
              ))}
          </div>
          <div className="footer-tags">
            <h2>Tag</h2>
            {columns
              .find((item) => item.title === "Visit")
              .resources.map(({ name, link }, key) => (
                <p key={key} onClick={() => Navigation(link)}>
                  {name}
                </p>
              ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-social-media">
        <h2>Follow Us :</h2>
        <div className="social-media-icons">
          <img src={social} alt="icon" />
          <img src={social} alt="icon" />
        </div>
      </div>
    </footer>
  );
}
function FooterSearch() {
  const Navigation = useNavigate();
  const columns = [
    {
      title: "Resources",
      resources: [
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Careers",
          link: "/careers",
        },
        {
          name: "Contact",
          link: "/contact",
        },
        {
          name: "Admin",
          link: "/admin",
        },
      ],
    },
    {
      title: "Legal",
      resources: [
        {
          name: "Privacy",
          link: "/privacy",
        },
        {
          name: "Terms",
          link: "/terms",
        },
      ],
    },
    {
      title: "Visit",
      resources: [
        {
          name: "Locations",
          link: "/locations",
        },
        {
          name: "Culture",
          link: "/culture",
        },
      ],
    },
  ];
  return (
    <footer className="footer-search">
      <div className="footer-container">
        <div className="footer-left">
          <img className="footer-logo" src={logo} alt="Logo" />
        </div>
        <div className="footer-right">
          <div className="footer-categories">
            <h2>Category</h2>
            {columns
              .find((item) => item.title === "Resources")
              .resources.map(({ name, link }, key) => (
                <p key={key} onClick={() => Navigation(link)}>
                  {name}
                </p>
              ))}
          </div>
          <div className="footer-tags">
            <h2>Tag</h2>
            {columns
              .find((item) => item.title === "Visit")
              .resources.map(({ name, link }, key) => (
                <p key={key} onClick={() => Navigation(link)}>
                  {name}
                </p>
              ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-social-media">
        <h2>Follow Us :</h2>
        <div className="social-media-icons">
          <img src={social} alt="icon" />
          <img src={social} alt="icon" />
        </div>
      </div>
    </footer>
  );
}

export { Footer, FooterSearch };
