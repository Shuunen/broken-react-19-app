import { useState } from "react";

const CustomerEdit = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <div className="text-xl text-green-800 border-b-2 mx-auto mb-6">
        Add a customer
      </div>
      <ul className="pb-6">
        <li className="mb-3">
          First-name
          <input
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </li>
        <li>
          Last-name
          <input
            value={lastName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </li>
      </ul>
      <button className="border-2 mb-6 bg-green-100 border-green-500 mx-auto px-3 py-1">
        Add this customer
      </button>
    </>
  );
  console.log(setLastName);
};

export { CustomerEdit };
