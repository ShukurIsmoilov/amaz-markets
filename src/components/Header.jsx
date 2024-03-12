import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {

  const headerLinks = [
    { to: "buy_account", text: "Buy Account", active: false },
    { to: "sell_account", text: "Sell Account", active: false },
    { to: "services", text: "Services", active: true },
    { to: "blog", text: "Blog", active: false },
    { to: "search", text: "Search", active: false },
  ]

  // const [activeLink, setActiveLink] = useState(0);

  return (
    <header className="header">
      <nav>
        <div className='container' style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}>
          <img src={logo} alt="" />

          <ul style={{
            listStyle: "none",
            display: "flex",
            gap: "40px",
          }}>
            {headerLinks.map((link, index) => {
              return (
                <li style={{
                  color: "#EB6108",
                  display: "flex",
                  gap: "5px",
                  flexDirection: "column",
                  alignItems: "center",
                
                }} key={index}>
                  <a className={link.active ? "active" : ""} href={link.to}>{link.text}</a>
                  <span style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: link.active ? "#EB6108" : "transparent",
                  }}></span>
                </li>
              )
            })}
            <li style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
              <button className="lang_btn active_lang">En</button>
              <button className="lang_btn">Ru</button></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export { Header };