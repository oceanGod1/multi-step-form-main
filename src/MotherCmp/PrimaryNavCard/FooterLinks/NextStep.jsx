import "./NextStep.css";

export default function NextStep({ increament, count }) {
  const isFinish = count === 4;

  return (
    <button
      className={`next-step ${isFinish ? "confirm-button" : "next-step"}`}
      onClick={increament}
    >
      {isFinish ? "Confirm" : "Next Step"}
    </button>
  );
}
