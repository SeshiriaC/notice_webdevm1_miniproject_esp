import React from "react";
import noticeLogo from "../images/noticeV1.png";
import facebookLogo from "../images/facebook.png";
import linkedInLogo from "../images/linkedin.png";
import githubLogo from "../images/github.png";
import { Divider } from "primereact/divider";
import { Link } from "react-router-dom";

function PageFooter() {
  return (
    <div class="footer">
      <div class="footerContainer">
        <div id="container">
          <div id="leftfooter">
            <Link to="/acceuil">
              <img src={noticeLogo} id="footerLogo" alt="Logo de Notice" />
            </Link>
          </div>
          <div id="middlefooter">
            <h1>A propos</h1>
            <p>
              Notice, comme son nom l'indique est une notice pour vous informer
              sur les évènements à venir. Restez connectés !
            </p>
          </div>
          <div id="rightfooter">
            <h1>Contact Me</h1>
            <div id="contactLogoPanel" className="pb-4">
              <div>
                <Link to="https://www.linkedin.com/in/hery-nirina-cecilia-razafimandimby" preventScrollReset={true} target="_blank">
                  <img
                    src={linkedInLogo}
                    id="contactLogo"
                    alt="logo de Linkedin"
                  />
                </Link>
              </div>
              <div id="panel">
                <Link to="https://github.com/SeshiriaC" preventScrollReset={true} target="_blank">
                  <img src={githubLogo} id="contactLogo" alt="Logo de GitHub" />
                </Link>
              </div>
              <div>
                <Link to="https://facebook.com/cecilianirina.razafimandimby" preventScrollReset={true} target="_blank">
                  <img
                    src={facebookLogo}
                    id="contactLogo"
                    alt="Logo de Facebook"
                  />
                </Link>
              </div>
            </div>
            <Divider />
            <div>
              <Link to="/sources">
                <h1>Sources</h1>
              </Link>
            </div>
          </div>
        </div>
        <footer id="copyright">Copyright &copy; 2024 Tous droits réservés</footer>
      </div>
    </div>
  );
}

export default PageFooter;
