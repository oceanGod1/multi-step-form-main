import "./FinishingUp.css";

export default function FinishingUp({
  total,
  count,
  value,
  price,
  duration,
  pickAddOn,
  handleClick,
}) {
  const selectedAddon = Object.values(pickAddOn).map(
    ({ status, heading, price }) =>
      status === true && (
        <div key={heading} className="confirm-add-ons">
          <p className="confirm-addon-heading">{heading}</p>
          <p className="confirm-addon-price">
            <span>+$</span>
            {price}
            <span>{duration && `/${duration}`}</span>
          </p>
        </div>
      )
  );

  return (
    <>
      <div className="finishing-up">
        <div className="step2-result">
          <h2>
            {value} {duration && (duration === "mo" ? "(Monthly)" : "(Yearly)")}
          </h2>
          <p className="confirm-plan-price">
            ${price}
            {duration && `/${duration}`}
          </p>
          <a href="#" onClick={handleClick}>
            Change
          </a>
        </div>
        <hr />
        {selectedAddon}
      </div>
      <div className="confirm-total">
        <p className="total-heading">
          Total {duration && (duration === "mo" ? "(per month)" : "(per year)")}
        </p>
        <p className="total-price">
          ${Object.values(total).reduce((acc, val) => acc + val)}
          {duration && `/${duration}`}
        </p>
        {count === 4 && value === "No plan selected" && (
          <p className="final-instruction">Please select a plan</p>
        )}
      </div>
    </>
  );
}
