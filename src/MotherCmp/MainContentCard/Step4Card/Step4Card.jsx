import FinishingUp from "./FinishingUp/FinishingUp";
export default function Step4Card({
  total,
  userPlan,
  count,
  pickAddOn,
  handleClick,
}) {
  const { value, duration, price } = userPlan;

  return (
    <FinishingUp
      total={total}
      count={count}
      value={value}
      price={price}
      duration={duration}
      pickAddOn={pickAddOn}
      handleClick={handleClick}
    />
  );
}
