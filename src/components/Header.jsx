import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {

  const headerLinksFromStorageEn = [
    {
      id: "hl1",
      to: "buy-account",
      text: "Buy Account",
      active: true,
    },
    {
      id: "hl2",
      to: "sell-account",
      text: "Sell Account",
      active: false,
    },
    {
      id: "hl3",
      to: "services",
      text: "Services",
      active: false,
    },
    {
      id: "hl4",
      to: "blog",
      text: "Blog",
      active: false,
    },
    {
      id: "hl5",
      to: "search",
      text: "Search",
      active: false
    },
  ]

  const headerLinksFromStorageRu = [
    { id: "hl1", text: "Купить Аккаунт" },
    { id: "hl2", text: "Продать Аккаунт" },
    { id: "hl3", text: "Услуги" },
    { id: "hl4", text: "Блог" },
    { id: "hl5", text: "Поиск" },
  ]

  const [headerLinks, setHeaderLinks] = useState(headerLinksFromStorageEn);
  const [activeLinkId, setActiveLinkId] = useState(headerLinks[0].id);
  const [selectedLang, setSelectedLang] = useState("EN");


  useEffect(() => {
    const newHeaderLinks = headerLinks.map((item) => {
      return {
        ...item,
        active: false,
      };
    });
    newHeaderLinks.find((item) => item.id === activeLinkId).active = true;
    setHeaderLinks(newHeaderLinks);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeLinkId]);

  useEffect(() => {
    if (selectedLang === "EN") {
      const newHeaderLinks = headerLinks.map((item) => {
        return {
          ...item,
          text: headerLinksFromStorageEn.find((link) => link.id === item.id).text
        };
      });
      setHeaderLinks(newHeaderLinks);
    } else {
      const newHeaderLinks = headerLinks.map((item) => {
        return {
          ...item,
          text: headerLinksFromStorageRu.find((link) => link.id === item.id).text
        };
      });
      setHeaderLinks(newHeaderLinks);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLang])

  return (
    <header className="header">
      <nav>
        <div className="container">
          <a href="/">
            <img src={logo} alt="home" />
          </a>
          <ul className="link_list">
            {headerLinks.map((link) => {
              return (
                <li className="link_list_item" key={link.id}>
                  <Link
                    className={link.active ? "active_link" : ""}
                    onClick={() => setActiveLinkId(link.id)}
                    to={`/${link.to}`}
                  >
                    {link.text}
                  </Link>
                </li>
              )
            })}
            <li className="link_list_item_for_lang">
              <button
                className={`${selectedLang === "EN" ? "active_lang" : ""}`}
                onClick={() => setSelectedLang("EN")}
              >
                En
              </button>
              <button
                className={` ${selectedLang === "RU" ? "active_lang" : ""}`}
                onClick={() => setSelectedLang("RU")}
              >
                Ru
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export { Header };