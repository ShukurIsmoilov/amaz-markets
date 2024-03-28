import "./buy-account.css";

import laptops from "../../assets/laptops.png";
import america from "../../assets/america.png";
import europe from "../../assets/europe.png";
import asia from "../../assets/asia.png";
import us_flag_url from "../../assets/us-flag.svg";
import gb_flag_url from "../../assets/gb-flag.svg";
import phone_img_url from "../../assets/phone-messages.png";
import earth_img_url from "../../assets/earth.png";
import verified_img_url from "../../assets/verified-account.png";
import conversation_img_url from "../../assets/conversation.png";
import shield_img_url from "../../assets/shield.png";
import wifi_img_url from "../../assets/wifi.png";
import deal_img_url from "../../assets/deal.png";
import money_bag_img_url from "../../assets/money-bag.png";
import request_girl_url from "../../assets/request-girl.png";

import {
  FaSquareFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa6";

import { IoIosArrowDown } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";

import { Button } from "../../components/button";
import { SocialLinkButton } from "../../components/social-link-button";
import { useState } from "react";

const agedAccounts = [
  {
    businessName: "Flagman Shop",
    market: "Us",
    type: "Pro Account",
    age: 2019,
    reviews: "6 reviews",
    ratio: "100% positive",
    price: 1000,
    currency: "USD",
  },
  {
    businessName: "Health Care Direct UK",
    market: "gB",
    type: "Pro Account",
    age: 2019,
    reviews: "6 reviews",
    ratio: "100% positive",
    price: 1000,
    currency: "USD",
  },
  {
    businessName: "Flagman Shop",
    market: "us",
    type: "Pro Account",
    age: 2019,
    reviews: "6 reviews",
    ratio: "100% positive",
    price: 1000,
    currency: "USD",
  },
  {
    businessName: "Health Care Direct UK",
    market: "GB",
    type: "Pro Account",
    age: 2019,
    reviews: "6 reviews",
    ratio: "100% positive",
    price: 1000,
    currency: "USD",
  },
  {
    businessName: "Flagman Shop",
    market: "US",
    type: "Pro Account",
    age: 2019,
    reviews: "6 reviews",
    ratio: "100% positive",
    price: 1000,
    currency: "USD",
  },
  {
    businessName: "Health Care Direct UK",
    market: "GB",
    type: "Pro Account",
    age: 2019,
    reviews: "6 reviews",
    ratio: "100% positive",
    price: 1000,
    currency: "USD",
  },
  {
    businessName: "Flagman Shop",
    market: "US",
    type: "Pro Account",
    age: 2019,
    reviews: "6 reviews",
    ratio: "100% positive",
    price: 1000,
    currency: "USD",
  },
  {
    businessName: "Health Care Direct UK",
    market: "GB",
    type: "Pro Account",
    age: 2019,
    reviews: "6 reviews",
    ratio: "100% positive",
    price: 1000,
    currency: "GBP",
  },
]

const BuyAccountPage = () => {
  const [moreInfoOpened, setMoreInfoOpened] = useState(false);
  const [moreInfoData, setMoreInfoData] = useState();

  return (
    <main>
      <section className="main-banner">
        <div className="custom-shape-divider-bottom-1710995555">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            >
            </path>
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
              display="flex"
              alignItems="center"
              textColor="#fefefe"
              color="#ed7212"
              text="get started"
              uppercase
              p="17px 50px"
              m=" 0 0 70px 0"
              fz="20px"
              fw="700"
              brs={5}
              withArrowIcon
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
        <a
          href="#global-selling-continents"
          className="scroll-link"
        >
          scroll
        </a>
        <span className="scroll-link-line"></span>
      </section>

      <section
        className="global-selling-continents"
        id="global-selling-continents"
      >
        <div className="container">
          <h2>
            Amazon Global Selling:
            Access to the top international
            retail markets
          </h2>

          <div className="gsc-cards">
            <div className="gsc-card">
              <h3 className="gsc-card-title">Americas</h3>
              <div className="gsc-card-content">
                <img src={america} alt="america map" />
                <ul>
                  <li>
                    <a href="#">Amazon.com</a>
                  </li>
                  <li>
                    <a href="#">Amazon.ca</a>
                  </li>
                  <li>
                    <a href="#">Amazon.com.mx</a>
                  </li>
                  <li>
                    <a href="#">Amazon.com.br</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="gsc-card">
              <h3 className="gsc-card-title">Europe</h3>
              <div className="gsc-card-content">
                <img src={europe} alt="europe map" />
                <ul>
                  <li>
                    <a href="#">Amazon.co.uk</a>
                  </li>
                  <li>
                    <a href="#">Amazon.de</a>
                  </li>
                  <li>
                    <a href="#">Amazon.fr</a>
                  </li>
                  <li>
                    <a href="#">Amazon.com.it</a>
                  </li>
                  <li>
                    <a href="#">Amazon.es</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="gsc-card">
              <h3 className="gsc-card-title">Asia-Pacific</h3>
              <div className="gsc-card-content">
                <img src={asia} alt="Asia-Pacific map" />
                <ul>
                  <li>
                    <a href="#">Amazon.co.jp</a>
                  </li>
                  <li>
                    <a href="#">Amazon.cn</a>
                  </li>
                  <li>
                    <a href="#">Amazon.in</a>
                  </li>
                  <li>
                    <a href="#">Amazon.com.au</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="gsc-numbers">
            <div className="gsc-numbers-card">
              <span>13</span>
              <p>Marketplaces</p>
            </div>

            <div className="gsc-numbers-card">
              <span>175+</span>
              <p>Fulfillment Centers</p>
            </div>

            <div className="gsc-numbers-card">
              <span>180+</span>
              <p>Countries with Loyal Amazon Customers</p>
            </div>

            <div className="gsc-numbers-card">
              <span>30+</span>
              <p>Product Categories</p>
            </div>
          </div>
        </div>
      </section>

      <section className="aged-accounts">
        <div className="container">
          <h2>
            List of aged accounts for sale
          </h2>

          <div className="aged-accounts-table-wrapper">
            <div className="aged-accounts-table-title">
              Selling
            </div>
            <table className="aged-accounts-table">
              <thead>
                <tr>
                  <th>Business name</th>
                  <th>Market</th>
                  <th>Type</th>
                  <th>Account age</th>
                  <th>Reviews</th>
                  <th>Ratio</th>
                  <th>Price</th>
                  <th>Account details</th>
                </tr>
              </thead>
              <tbody>
                {
                  agedAccounts.length > 0 && agedAccounts.map((account, index) => (
                    <tr key={index}>
                      <td>{account.businessName}</td>
                      <td>
                        <img
                          src={String(account.market).toUpperCase() === 'US'
                            ? us_flag_url : String(account.market).toUpperCase() === 'GB'
                              ? gb_flag_url : 'default.png'}
                          alt={`${String(account.market).toUpperCase().length > 0
                            ? String(account.market).toUpperCase() : "default"} rounded flag`} />
                        <span>{String(account.market).toUpperCase()}</span>
                      </td>
                      <td>{account.type}</td>
                      <td>{account.age}</td>
                      <td>{account.reviews}</td>
                      <td>{account.ratio}</td>
                      <td>{`${account.currency === 'USD' ? '$' : '£'} ${account.price}`}</td>
                      <td>
                        <button onClick={() => {
                          setMoreInfoData(account)
                          setMoreInfoOpened(true)
                        }}
                        > More Info <IoIosArrowDown size={20} /></button>
                      </td>
                    </tr>))
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="benefits-and-verified-accounts">
        <div className="container">
          <div className="benefits-info">
            <img src={phone_img_url} alt="phone" />
            <div className="benefits-info-cards">
              <h2>Benefits you will get</h2>
              <div className="benefits-info-card">
                <img src={verified_img_url} alt="verified account icon" />
                <div className="benefits-info-card-text">
                  <h3>Verified Amazon Accounts</h3>
                  <p>
                    Each account goes through an expanded
                    multi-level authentication before the commercial offer.
                  </p>
                </div>
              </div>
              <div className="benefits-info-card">
                <img src={conversation_img_url} alt="verified account icon" />
                <div className="benefits-info-card-text">
                  <h3>Deal Safety</h3>
                  <p>
                    We ensure the security of the account transaction
                    between the seller and the buyer.
                  </p>
                </div>
              </div>
              <div className="benefits-info-card">
                <img src={shield_img_url} alt="verified account icon" />
                <div className="benefits-info-card-text">
                  <h3>After-purchase Support</h3>
                  <p>
                    We will provide you a technical support
                    within 14 days after the purchase. We will be happy to answer all your questions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="benefits-info">
            <div className="benefits-info-cards">
              <h2 className="verified-title">Amazon verified accounts</h2>
              <p>
                Become an Amazon seller! We offer country-based
                accounts for selling on Amazon.
              </p>
              <div className="benefits-info-card">
                <img src={wifi_img_url} alt="verified account icon" />
                <div className="benefits-info-card-text">
                  <h3>Work around the world</h3>
                  <p>
                    The account will be installed on the server
                    with a special IP address.al offer.
                  </p>
                </div>
              </div>
              <div className="benefits-info-card">
                <img src={deal_img_url} alt="verified account icon" />
                <div className="benefits-info-card-text">
                  <h3>All types of selling</h3>
                  <p>
                    Dropshipping, Online Arbitrage,
                    Private Label. offer.
                  </p>
                </div>
              </div>
              <div className="benefits-info-card">
                <img src={money_bag_img_url} alt="verified account icon" />
                <div className="benefits-info-card-text">
                  <h3>Money flow</h3>
                  <p>
                    All payments will go to your Payoneer. offer.
                  </p>
                </div>
              </div>
            </div>
            <img src={earth_img_url} alt="phone" />

          </div>
        </div>
      </section>
      <section className="request">
        <div className="container">
          <div className="benefits-info">
            <img src={request_girl_url} alt="girl" />
            <div className="benefits-info-cards">
              <h2>Leave a request</h2>
              <p>
                It will take you less than sixty seconds. A member
                of our team will contact you shortly after.
              </p>
              <form>
                <div className="request-form-input-wrapper">
                  <label htmlFor="request-email">Email Address*</label>
                  <input
                    id="request-email"
                    type="email"
                    placeholder="info@gmail.com"
                    required
                  />
                </div>
                <div className="request-form-input-wrapper">
                  <label htmlFor="request-phone">Telephone number*</label>
                  <input
                    id="request-phone"
                    type="text"
                    placeholder="900 800 700"
                    required
                  />
                </div>
                <div className="request-form-input-wrapper">
                  <label htmlFor="request-message">Your message</label>
                  <input
                    id="request-message"
                    type="text"
                    placeholder="Your message here"
                  />
                </div>
                <Button
                  textAlign="center"
                  w="100%"
                  color="#ed7212"
                  textColor="#fefefe"
                  p="17px 50px"
                  m=" 0 0 70px 0"
                  fz="20px"
                  fw="700"
                  brs="5px"
                  text="Send"
                />
              </form>
            </div>
          </div>
        </div>
      </section>

      {moreInfoOpened && (
        <>
          <div
            className="account-details-modal-bg"
            onClick={() => {
              setMoreInfoData(null)
              setMoreInfoOpened(false)
            }}
          >
          </div>
          <div className="account-details-modal">
            <h2>Account details</h2>
            <div className="account-details-modal-data-cell">
              Business name: <span>{moreInfoData?.businessName}</span>
            </div>
            <div className="account-details-modal-data-cell">
              Market: <span>{moreInfoData?.market}</span>
            </div>
            <div className="account-details-modal-data-cell">
              Type: <span>{moreInfoData?.type}</span>
            </div>
            <div className="account-details-modal-data-cell">
              Account age: <span>{moreInfoData?.age}</span>
            </div>
            <div className="account-details-modal-data-cell">
              Reviews: <span>{moreInfoData?.reviews}</span>
            </div>
            <div className="account-details-modal-data-cell">
              Ratio: <span>{moreInfoData?.ratio}</span>
            </div>
            <div className="account-details-modal-data-cell">
              Price: <span>{`${moreInfoData?.currency === 'USD' ? '$' : '£'} ${moreInfoData?.price}`}</span>
            </div>
            <div
              className="account-details-modal-cross"
              onClick={() => {
                setMoreInfoData(null)
                setMoreInfoOpened(false)
              }}
            >
              <RxCrossCircled color="red" />
            </div>

          </div>
        </>
      )}
    </main >
  )
}

export { BuyAccountPage };