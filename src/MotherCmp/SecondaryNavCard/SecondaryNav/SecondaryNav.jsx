import CurrentStep from "./CurrentStep/CurrentStep";
import "./SecondaryNav.css";
export default function SecondaryNav({ count }) {
  // The content of the secondary nav. this array serves as data base, meaning that; the content of the array should have been surced from a server
  const steps = [
    { id: 101, stepTitle: "YOUR INFO" },
    { id: 102, stepTitle: "SELECT PLAN" },
    { id: 103, stepTitle: "ADD-ONS" },
    { id: 104, stepTitle: "SUMMARY" },
  ];

  return (
    <ul className="secondary-nav">
      {steps.map((item, idx) => {
        const { id, stepTitle } = item;
        return (
          <CurrentStep
            key={id}
            stepNum={idx + 1}
            stepTitle={stepTitle}
            isActive={idx === (count <= 4 ? count - 1 : 3)}
          />
        );
      })}
    </ul>
  );
}
