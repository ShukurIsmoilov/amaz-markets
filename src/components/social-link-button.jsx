import { Link } from "react-router-dom";
import "./social-link-button.css";

// eslint-disable-next-line react/prop-types
const SocialLinkButton = ({ to, target, color, icon }) => {
  return (
    <Link
      className="social-link"
      color={color}
      to={to}
      target={target}
    >
      {icon}
    </Link>
  )
}

export { SocialLinkButton };