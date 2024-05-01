import { Anchor } from "react-bootstrap";
import "./NormalWhiteButton.css";

function NormalWhiteButton({ text, icon, click, isHidden = "flex", href }) {
  return (
    <Anchor href={href}>
      <button
        className="normal-button white-button"
        style={{ display: isHidden }}
        onClick={click}
      >
        {text}
        {icon}
      </button>
    </Anchor>
  );
}

export default NormalWhiteButton;
