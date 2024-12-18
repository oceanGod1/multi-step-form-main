import "./AddOn.css";
export default function AddOn({
  name,
  price,
  elemID,
  heading,
  isMonth,
  caption,
  isChecked,
  handleAddonSelection,
}) {
  return (
    <label
      className="add-on"
      htmlFor={elemID}
      style={{
        borderColor: isChecked[name].status ? "var(--color2)" : "var(--color6)",
        backgroundColor: isChecked[name].status ? "var(--color9)" : "inherit",
      }}
    >
      <input
        className="pick-add-on"
        type="checkbox"
        name={name}
        id={elemID}
        checked={isChecked[name].status}
        onChange={handleAddonSelection}
      />
      <h2>{heading}</h2>
      <p className="price">
        <span>+$</span>
        <span>{isMonth ? price.monthly : price.yearly}</span>
        <span>{isMonth ? "/mo" : "/yr"}</span>
      </p>
      <figcaption className="offer">{caption}</figcaption>
    </label>
  );
}
