import FinishingUp from "./FinishingUp/FinishingUp";
export default function Step4Card({
  total,
  userPlan,
  pickAddOn,
  handleClick,
  userDetails,
}) {
  const { value, duration, price } = userPlan;

  return (
    <FinishingUp
      total={total}
      value={value}
      price={price}
      duration={duration}
      pickAddOn={pickAddOn}
      handleClick={handleClick}
      userDetails={userDetails}
    />
  );
}
