import "./buy-account.css";
import laptops from "../../assets/laptops.png";
import {
  FaSquareFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa6";

import { BsArrowRightCircleFill } from "react-icons/bs";
import { Button } from "../../components/button";
import { SocialLinkButton } from "../../components/social-link-button";



const BuyAccountPage = () => {
  return (
    <main>
      <section className="main-banner">
        <div className="custom-shape-divider-bottom-1710995555">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="container">
          <div className="main-banner-info">
            <h2>
              Start selling on Amazon right
              after buying an aged account
              or an entire online business
            </h2>
            <p>
              After your payment, you will be given access
              to full account details such as: login, e-mail
              details, bank card information and other
              important documentation.
            </p>

            <Button
              color="#ed7212"
              text="get started"
              uppercase
              p="17px 50px"
              m=" 0 0 70px 0"
              fz="20px"
              fw="700"
              brs={5}
              icon={<BsArrowRightCircleFill size={30} color="#fefefe" />}
            />

            <div className="main-banner-socials">
              <SocialLinkButton
                to="https://www.facebook.com"
                target="_blank"
                icon={<FaSquareFacebook className="social-link-icon" size={25} color="#889196" />}
              />
              <SocialLinkButton
                to="https://www.instagram.com"
                target="_blank"
                icon={<FaInstagram className="social-link-icon" size={25} color="#889196" />}
              />
              <SocialLinkButton
                to="https://www.linkedin.com"
                target="_blank"
                icon={<FaLinkedin className="social-link-icon" size={25} color="#889196" />}
              />
              <SocialLinkButton
                to="https://www.telegram.com"
                target="_blank"
                icon={<FaTelegram className="social-link-icon" size={25} color="#889196" />}
              />
            </div>

          </div>
          <div className="main-banner-image">
            <img src={laptops} alt="laptops" />
          </div>
        </div>
        <a href="#new-section" className="scroll-link" >scroll</a>
        <span className="scroll-link-line"></span>
      </section>
      <section className="scroll_section" style={{ height: "900px" }} id="new-section">

      </section>
    </main >
  )
}

export { BuyAccountPage };