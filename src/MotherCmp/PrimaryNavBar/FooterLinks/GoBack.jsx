import "./GoBack.css";
export default function GoBack({ count, decreament }) {
  return (
    <>
      {count != 1 && (
        <button className="go-back" onClick={decreament}>
          Go Back
        </button>
      )}
    </>
  );
}
