import "./Button.css"

// eslint-disable-next-line react/prop-types
const Button = ({ color, text, uppercase, p, m, fz, fw, icon, brs, gap }) => {
  return (
    <button style={{
      gap: gap ? gap : "10px",
      padding: p,
      margin: m,
      fontSize: fz,
      fontWeight: fw,
      border: "none",
      borderRadius: brs,
      backgroundColor: color,
      textTransform: uppercase ? "uppercase" : "none",
      cursor: "pointer",
    }}
    >
      {icon}
      {text}
    </button>
  )
}

export { Button };