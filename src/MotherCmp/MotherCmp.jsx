// import every required state
import { useState } from "react";

// import every child component
import SecondaryNavCard from "./SecondaryNavCard/SecondaryNavCard";
import PrimaryNavCard from "./PrimaryNavCard/PrimaryNavCard";
import MainContentCard from "./MainContentCard/MainContentCard";

// import the css file
import "./MotherCmp.css";

// the mother component
export default function MotherCmp() {
  // The userDetail object
  const [userDetails, setUserDetails] = useState({
    userPersonalInfo: {},
    userPlan: {},
    pickAddOn: {},
  });

  // destructure the neccessary useStates at the highest level
  const [count, setCount] = useState(1);
  const [isMonth, setIsMonth] = useState(true);
  const [step1Done, setStep1Done] = useState(false);

  // PROIMARY NAVIGATION

  return (
    <main className="mother-cmp">
      <SecondaryNavCard count={count} />
      <MainContentCard
        count={count}
        step1Done={step1Done}
        setUserDetails={setUserDetails}
        isMonth={isMonth}
        setIsMonth={setIsMonth}
        setCount={setCount}
      />

      {count <= 4 && (
        <PrimaryNavCard
          count={count}
          setCount={setCount}
          userDetails={userDetails}
          setStep1Done={setStep1Done}
        />
      )}
    </main>
  );
}
