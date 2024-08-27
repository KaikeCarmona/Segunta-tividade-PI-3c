import "./styles.css";

export default function CardView({ name, checked, onRemove, onToggle }) {
  return (
    <div id="cardView">
      <p>{name}</p>
      <div className="inputs">
        <input
          type="checkbox"
          checked={checked}
          onChange={onToggle} // Chama a função para alternar o estado do checkbox
        />
        <button onClick={onRemove}>❌</button>
      </div>
    </div>
  );
}