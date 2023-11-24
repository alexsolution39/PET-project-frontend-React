import "./NormalWhiteButton.css";

function NormalWhiteButton({ text, icon, click }) {
  return (
    <button className="normal-button white-button" onClick={click}>
      {text}
      {icon}
    </button>
  );
}

export default NormalWhiteButton;
