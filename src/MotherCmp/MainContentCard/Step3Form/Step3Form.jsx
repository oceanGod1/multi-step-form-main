import AddOn from "./AddOn/AddOn";
import "./Step3Form.css";
// The properties of the child of the step3Form component. They should ordinarily have been fetched from the site server
const addOnProperties = [
  {
    id: 115,
    heading: "Online service",
    price: { monthly: 1, yearly: 10 },
    caption: "Access to multiplayer games",
    name: "onlineService",
    elemID: "online-service",
  },
  {
    id: 116,
    heading: "Larger storage",
    price: { monthly: 2, yearly: 20 },
    caption: "Extra 1TB of cloud save",
    name: "largerStorage",
    elemID: "larger-storage",
  },
  {
    id: 117,
    heading: "Cusomizable profile",
    price: { monthly: 2, yearly: 20 },
    caption: "Custom theme on your profile",
    name: "customizableProfile",
    elemID: "customizable-profile",
  },
];

export default function Step3Form({
  isMonth,
  pickAddOn,
  handleAddonSelection,
}) {
  return (
    <form className="step3-form">
      {addOnProperties.map(({ id, heading, price, caption, name, elemID }) => {
        return (
          <AddOn
            key={id}
            name={name}
            price={price}
            elemID={elemID}
            heading={heading}
            isMonth={isMonth}
            caption={caption}
            isChecked={pickAddOn}
            handleAddonSelection={handleAddonSelection}
          />
        );
      })}
    </form>
  );
}
