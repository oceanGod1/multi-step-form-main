import { useState, useEffect } from "react";

import MainHeading from "./MainHeading/MainHeading";
import Step1Form from "./Step1Form/Step1Form";
import Step2Form from "./Step2Form/Step2Form";
import Step3Form from "./Step3Form/Step3Form";
import Step4Card from "./Step4Card/Step4Card";
import ThankYou from "./ThankYouCard/ThankYou";

import "./MainContentCard.css";

// The properties of the child of the heading component. They should ordinarily have been fetched from the site server
const headingProperties = [
  {
    id: 108,
    heading: "Personal info",
    instruction: "Please provide your name, email address, and phone number.",
  },
  {
    id: 109,
    heading: "Select your plan",
    instruction: "You have the option of monthly or yearly billing.",
  },
  {
    id: 110,
    heading: "Pick add-ons",
    instruction: "Add-ons help enhance your gaming experience.",
  },
  {
    id: 111,
    heading: "Finishing up",
    instruction: "Double-check everything looks OK before confirming.",
  },
];

export default function MainContentCard({
  count,
  step1Done,
  setUserDetails,
  isMonth,
  setIsMonth,
  setCount,
  userDetails,
}) {
  // DESTRUCTURE ALL THE NECESSARY USESTATE AND EFFECTS
  // useState for the input fields in step 1
  const [userPersonalInfo, setUserPersonalInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  // useState for the plan selection in step 2
  const [userPlan, setUserPlan] = useState({
    value: "No plan selected",
    duration: null,
    price: 0,
  });

  // useState for the add-on checkboxes in step 3
  const [pickAddOn, setPickAddOn] = useState({
    onlineService: { status: false, heading: "", price: 0 },
    largerStorage: { status: false, heading: "", price: 0 },
    customizableProfile: { status: false, heading: "", price: 0 },
  });

  // useState for the total amount in step 3
  const [total, setTotal] = useState({
    planPrice: 0,
    addon1: 0,
    addon2: 0,
    addon3: 0,
  });

  // useEffect for the final user's data.
  useEffect(() => {
    setUserDetails(u => {
      return {
        ...u,
        userPersonalInfo: userPersonalInfo,
        userPlan: userPlan,
        pickAddOn: pickAddOn,
        total: total,
      };
    });
  }, [userPersonalInfo, userPlan, pickAddOn, total]);

  useEffect(() => {
    setUserPlan(uP => {
      return {
        ...uP,
        value: "No plan selected",
        duration: null,
        price: 0,
      };
    });
    setPickAddOn({
      onlineService: { status: false, heading: "", price: 0 },
      largerStorage: { status: false, heading: "", price: 0 },
      customizableProfile: { status: false, heading: "", price: 0 },
    });
  }, [isMonth]);

  useEffect(() => {
    setTotal(t => {
      return {
        ...t,
        planPrice: Number(userPlan.price),
        addon1: Number(pickAddOn.onlineService.price),
        addon2: Number(pickAddOn.largerStorage.price),
        addon3: Number(pickAddOn.customizableProfile.price),
      };
    });
  }, [userPlan, pickAddOn]);

  // EVENT HANDLERS FOR ALL DESTRUCTURED STATES
  // event handler for the step 1 input fields
  const handleStep1Change = e => {
    return setUserPersonalInfo(v => {
      return { ...v, [e.target.name]: e.target.value };
    });
  };

  // Event handler for toggling the plan duration in step 2
  const handlePlanDurationToggle = e => {
    setIsMonth(!isMonth);
  };

  // Event handler to select preferd plan in step 2
  const handlePlanSelection = e => {
    const priceElement = e.target.parentElement.children[3];
    setUserPlan(currPlan => {
      return {
        ...currPlan,
        value: e.target.value,
        duration: priceElement.children[3].innerText,
        price: priceElement.children[1].innerText,
      };
    });
  };

  // Event handler for the checkboxes in step 3
  const handleAddonSelection = e => {
    setPickAddOn(a => {
      return {
        ...a,
        [e.target.name]: {
          ...currAddOn[e.target.name],
          status: !pickAddOn[e.target.name].status,
          heading: e.target.nextElementSibling.innerText,
          price: !pickAddOn[e.target.name].status
            ? e.target.parentElement.children[2].children[1].innerText
            : 0,
        },
      };
    });
  };

  // Event handler for change anchor element in step 4
  const handleClick = () => {
    setCount(c => (c = 2));
  };
  const inputAndSelection = [
    <Step1Form
      inputValue={userPersonalInfo}
      handleChange={handleStep1Change}
      step1Done={step1Done}
    />,
    <Step2Form
      isMonth={isMonth}
      handlePlanDurationToggle={handlePlanDurationToggle}
      handlePlanSelection={handlePlanSelection}
      userPlan={userPlan}
    />,
    <Step3Form
      isMonth={isMonth}
      pickAddOn={pickAddOn}
      handleAddonSelection={handleAddonSelection}
    />,
    <Step4Card
      total={total}
      userPlan={userPlan}
      pickAddOn={pickAddOn}
      handleClick={handleClick}
      userDetails={userDetails}
    />,
    <ThankYou />,
  ];

  const { heading, instruction } = headingProperties.find(item =>
    count <= 4
      ? item === headingProperties[count - 1]
      : item === headingProperties[0]
  );
  return (
    <section className="main-content-card">
      {count <= 4 && (
        <MainHeading heading={heading} instruction={instruction} />
      )}
      {inputAndSelection[count - 1]}
    </section>
  );
}
