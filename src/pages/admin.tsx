import React, { useState } from "react";
import { initialCrackers } from "../data/adminItem";
import SideNavAdmin from "../components/sideNavAdmin";

const Admin = () => {
  const [crackers, setCrackers] = useState(initialCrackers);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingCracker, setEditingCracker] = useState({
    name: "",
    type: "",
    price: "",
    category: "",
  });

  const handleEditClick = (index: any) => {
    setEditingIndex(index);
    setEditingCracker(crackers[index]);
  };

  const handleSaveClick = () => {
    const updatedCrackers = [...crackers];
    //@ts-ignore
    updatedCrackers[editingIndex] = editingCracker;
    setCrackers(updatedCrackers);
    setEditingIndex(null);
  };

  const handleChange = (e: any) => {
    setEditingCracker({
      ...editingCracker,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="flex h-screen">
        <SideNavAdmin />
        <div className="flex-1 p-7 overflow-auto">
          <h1 className="text-4xl font-vt323 text-center mb-6">Admin</h1>
          <div className="container mx-auto px-4 py-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-md">
              <thead>
                <tr className="bg-black rounded-lg">
                  <th className="px-6 py-3 border-b border-gray-200  text-left text-xs font-medium text-white uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200  text-left text-xs font-medium text-white uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200  text-left text-xs font-medium text-white uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200  text-left text-xs font-medium text-white uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200  text-left text-xs font-medium text-white uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {crackers.map((cracker, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingIndex === index ? (
                        <input
                          name="name"
                          value={editingCracker.name}
                          onChange={handleChange}
                          className="w-full px-2 py-1 border border-gray-300 rounded"
                        />
                      ) : (
                        cracker.name
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingIndex === index ? (
                        <input
                          name="type"
                          value={editingCracker.type}
                          onChange={handleChange}
                          className="w-full px-2 py-1 border border-gray-300 rounded"
                        />
                      ) : (
                        cracker.type
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingIndex === index ? (
                        <input
                          name="price"
                          value={editingCracker.price}
                          onChange={handleChange}
                          className="w-full px-2 py-1 border border-gray-300 rounded"
                        />
                      ) : (
                        cracker.price
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingIndex === index ? (
                        <input
                          name="category"
                          value={editingCracker.category}
                          onChange={handleChange}
                          className="w-full px-2 py-1 border border-gray-300 rounded"
                        />
                      ) : (
                        cracker.category
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {editingIndex === index ? (
                        <button
                          onClick={handleSaveClick}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEditClick(index)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
