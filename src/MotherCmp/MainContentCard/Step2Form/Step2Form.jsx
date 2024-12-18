// import every child component
import PlanAndBilling from "./PlandAndBilling/PlanAndBilling";

// import the css file
import "./Step2Form.css";

// The properties of the child of the step2Card component. They should ordinarily have been fetched from the site server
const planAndBillingProperties = [
  {
    id: 112,
    elemID: "arcadPlan",
    src: "assets/images/icon-arcade.svg",
    alt: "arcade plan icon",
    title: "Arcade",
    price: { monthly: "9", yearly: "90" },
  },
  {
    id: 113,
    elemID: "advancedPlan",
    src: "assets/images/icon-advanced.svg",
    alt: "advanced plan icon",
    title: "Advanced",
    price: { monthly: "12", yearly: "120" },
  },
  {
    id: 114,
    elemID: "proPlan",
    src: "assets/images/icon-pro.svg",
    alt: "pro plan icon",
    title: "Pro",
    price: { monthly: "15", yearly: "150" },
  },
];

export default function Step2Form({
  isMonth,
  handlePlanDurationToggle,
  handlePlanSelection,
  userPlan,
}) {
  // dynamically set the color of the texts in the toggle-plan li element
  const styles = (activeColor, inactiveColor) => {
    return { color: isMonth ? activeColor : inactiveColor };
  };

  return (
    <form className="step2-form">
      {planAndBillingProperties.map(
        ({ id, elemID, src, alt, title, price }) => {
          const { monthly, yearly } = price;
          return (
            <PlanAndBilling
              key={id}
              elemID={elemID}
              src={src}
              alt={alt}
              title={title}
              monthly={monthly}
              yearly={yearly}
              isMonth={isMonth}
              userPlan={userPlan}
              handleClick={handlePlanSelection}
            />
          );
        }
      )}
      <fieldset className="toggle-duration-card">
        <span style={styles("var(--color1)", "var(--color6)")}>Monthly</span>
        <input
          type="range"
          name="changePlan"
          id="change-plan"
          min={0}
          max={1}
          value={isMonth ? 0 : 1}
          onChange={handlePlanDurationToggle}
        />
        <span style={styles("var(--color6)", "var(--color1)")}>Yearly</span>
      </fieldset>
    </form>
  );
}
