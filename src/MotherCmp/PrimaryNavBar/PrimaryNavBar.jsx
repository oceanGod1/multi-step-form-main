import NextStep from "./FooterLinks/NextStep";
import GoBack from "./FooterLinks/GoBack";

import "./PrimaryNavBar.css";

export default function PrimaryNavBar({
  count,
  setCount,
  userDetails,
  setStep1Done,
  setUserDetails,
}) {
  const increament = () => {
    const { name, email, phoneNumber } = userDetails.userPersonalInfo;
    count < 4 && name && email && phoneNumber && setCount(c => c + 1);

    count === 4 &&
      userDetails.userPlan.value === "No plan selected" &&
      (() => {
        setUserDetails(u => ({ ...u, noPlanSelected: true }));
        setTimeout(
          () => setUserDetails(u => ({ ...u, noPlanSelected: false })),
          1000
        );
      })();

    count === 4 &&
      userDetails.userPlan.value != "No plan selected" &&
      (() => {
        setCount(c => c + 1);

        setUserDetails(u => {
          const finalUserData = { ...u };
          delete finalUserData.noPlanSelected;
          return finalUserData;
        });
      })();

    setStep1Done(true);
  };
  const decreament = () => {
    count > 1 && setCount(c => c - 1);
  };

  return (
    <footer className="primry-nav-bar">
      <nav style={{ justifyContent: count === 1 ? "end" : "space-between" }}>
        <GoBack decreament={decreament} count={count} />
        <NextStep increament={increament} count={count} />
      </nav>
    </footer>
  );
}
