import NextStep from "./FooterLinks/NextStep";
import GoBack from "./FooterLinks/GoBack";

import "./PrimaryNavCard.css";

export default function PrimaryNavCard({
  count,
  setCount,
  userDetails,
  setStep1Done,
}) {
  const increament = () => {
    const { name, email, phoneNumber } = userDetails.userPersonalInfo;
    count < 4 &&
      name &&
      email &&
      phoneNumber &&
      setCount(currCount => currCount + 1);
    count === 4 &&
      userDetails.userPlan.value != "No plan selected" &&
      (() => {
        console.log(userDetails);
        setCount(currCount => currCount + 1);
      })();

    setStep1Done(true);
  };
  const decreament = () => {
    count > 1 && setCount(currCount => currCount - 1);
  };

  return (
    <footer className="primry-nav-card">
      <nav style={{ justifyContent: count === 1 ? "end" : "space-between" }}>
        <GoBack decreament={decreament} count={count} />
        <NextStep increament={increament} count={count} />
      </nav>
    </footer>
  );
}
