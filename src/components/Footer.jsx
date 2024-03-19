import { AiFillApple } from "react-icons/ai";

const Footer = () => {
  const shouldBeRed = true;
  return (
    <footer>
      <AiFillApple color={shouldBeRed ? "red" : "grey" } size={100} />
    </footer>
  )
}

export { Footer };