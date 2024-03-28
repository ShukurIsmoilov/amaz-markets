import { useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

/* eslint-disable react/prop-types */
const Button = ({
  color,
  textColor,
  textAlign,
  display,
  alignItems,
  text,
  uppercase,
  p,
  m,
  fz,
  fw,
  brs,
  gap,
  w,
  h,
  withArrowIcon,
}) => {
  const [mouseOverButton, setMouseOverButton] = useState(false)

  return (
    <button
      style={{
        display: display ? display : "inline",
        alignItems: alignItems ? alignItems : "flex-start",
        width: w ? w : "auto",
        height: h ? h : "auto",
        textAlign: textAlign ? textAlign : "center",
        gap: gap ? gap : "10px",
        padding: p,
        margin: m,
        fontSize: fz,
        fontWeight: fw,
        border: `2px solid ${color}`,
        borderRadius: brs,
        backgroundColor: color,
        textTransform: uppercase ? "uppercase" : "none",
        cursor: "pointer",
        color: textColor ? textColor : "inherit",
      }}
      onMouseOver={(e) => {
        setMouseOverButton(true)
        e.target.closest("button").style.backgroundColor = "transparent";
        e.target.closest("button").style.color = color;
      }}
      onMouseLeave={(e) => {
        setMouseOverButton(false)
        e.target.closest("button").style.backgroundColor = color;
        e.target.closest("button").style.color = textColor ? textColor : "inherit";
      }}
    >
      {withArrowIcon
        ? <BsArrowRightCircleFill
          size={30}
          color={mouseOverButton ? color : textColor}
        />
        : ""
      }
      {text}
    </button>
  )
}

export { Button };