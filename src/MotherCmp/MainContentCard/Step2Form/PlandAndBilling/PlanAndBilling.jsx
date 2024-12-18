import "./PlanAndBilling.css";
export default function PlanAndBilling({
  elemID,
  src,
  alt,
  title,
  monthly,
  yearly,
  isMonth,
  userPlan,
  handleClick,
}) {
  return (
    <label
      className={`plan-and-billing ${
        title === userPlan.value ? "selected-plan" : ""
      }`}
      htmlFor={elemID}
    >
      <input
        type="radio"
        id={elemID}
        name="planAndBilling"
        onChange={handleClick}
        value={title}
        checked={title === userPlan.value}
      />

      <img className="plan-icon" src={src} alt={alt} />
      <h2 className="plan-title">{title}</h2>
      <p className="price">
        <span>$</span>
        <span>{isMonth ? monthly : yearly}</span>
        <span>/</span>
        <span>{isMonth ? "mo" : "yr"}</span>
      </p>
      <p
        className="yearly-bonus"
        style={{ display: isMonth ? "none" : "block" }}
      >
        2 months free
      </p>
    </label>
  );
}
