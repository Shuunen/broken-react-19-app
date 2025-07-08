import { useState } from "react";
import { CustomerEdit } from "./components/CustomerEdit";
import { CustomerList } from "./components/CustomerList";

console.clear();

function App() {
  const items = [
    {
      firstName: "Michael",
      lastName: "Scott",
    },
    {
      firstName: "Pam",
      lastName: "Beesly",
    },
    {
      firstName: "Jim",
      lastName: "Halpert",
    },
  ];

  const [showEdit, setShowEdit] = useState(false);

  return (
    <main className="flex flex-col p-12">
      <h2 className="text-3xl mb-6">Liste des invités</h2>
      <h2 className="text-xl mb-6">Liste</h2>
      <CustomerList className="mb-6" items={items} />
      {!showEdit && (
        <button
          onClick={() => setShowEdit(true)}
          className="border-2 mb-6 rounded-lg bg-blue-100 border-blue-500 mx-auto px-3 py-1"
        >
          Ajouter
        </button>
      )}
      {showEdit && <CustomerEdit />}
    </main>
  );
}

export default App;
