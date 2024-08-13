import React, { useState } from "react";

const PricingComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-[#0f172a] text-white" : "bg-[#F8FAFC] text-gray-900"
      } min-h-screen flex flex-col items-center p-6 transition-colors duration-300`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mb-4 p-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
      <div
        className={`max-w-4xl w-full ${
          darkMode ? "bg-[#1e293b] border border-gray-700" : "bg-white border border-gray-200"
        } p-8 rounded-lg shadow-lg transition-colors duration-300`}
      >
        <h1 className={`text-2xl font-bold mb-2 ${darkMode ? "text-[#a5b4fc]" : "text-indigo-600"}`}>
          API Pricing
        </h1>
        <p className={`mb-4 text-[1rem] ${darkMode ? "text-[#e2e8f0]" : "text-gray-600"}`}>
          Our API pricing is based on the model used and the number of tokens
          processed. Here&apos;s a breakdown of the costs:
        </p>
        <div className={`overflow-x-auto border ${darkMode ? "border-[#334155]" : "border-gray-200"} rounded-md`}>
          <table className="table-auto w-full text-left ">
            <thead>
              <tr className={`text-[0.7rem] ${darkMode ? "bg-[#6366f1] text-white" : "bg-indigo-600 text-white"} font-medium`}>
                <th className="px-4 py-3">API</th>
                <th className="px-4 py-3">MODEL</th>
                <th className="px-4 py-3">PRICE PER 1K TOKENS</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`border-t text-[1.1rem] ${darkMode ? "border-[#334155] text-[#e2e8f0]" : "border-gray-200 text-gray-800"}`}>
                <td className="px-4 py-3">OpenAI</td>
                <td className="px-4 py-3">GPT-3.5</td>
                <td className="px-4 py-3">$0.002</td>
              </tr>
              <tr className={`text-[1.1rem] border-t ${darkMode ? "border-[#334155] text-[#e2e8f0]" : "border-gray-200 text-gray-800"}`}>
                <td className="px-4 py-3">OpenAI</td>
                <td className="px-4 py-3">GPT-4</td>
                <td className="px-4 py-3">$0.03</td>
              </tr>
              <tr className={`border-t text-[1.1rem] ${darkMode ? "border-[#334155] text-[#e2e8f0]" : "border-gray-200 text-gray-800"}`}>
                <td className="px-4 py-3">Together AI</td>
                <td className="px-4 py-3">Llama-2-70b</td>
                <td className="px-4 py-3">$0.0008</td>
              </tr>
              <tr className={`border-t text-[1.1rem] ${darkMode ? "border-[#334155] text-[#e2e8f0]" : "border-gray-200 text-gray-800"}`}>
                <td className="px-4 py-3">Together AI</td>
                <td className="px-4 py-3">Llama-2-13b</td>
                <td className="px-4 py-3">$0.0006</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <h2 className={`text-xl font-bold mb-1 ${darkMode ? "text-[#a5b4fc]" : "text-indigo-600"}`}>
            Token Estimation
          </h2>
          <p className={` ${darkMode ? "text-[#e2e8f0]" : "text-gray-600"} mb-7`}>
            On average, 1 token is approximately 4 characters or 0.75 words. For
            precise pricing, we recommend using our token calculator tool.
          </p>
          <h2 className={`text-xl font-bold  ${darkMode ? "text-[#a5b4fc]" : "text-indigo-600"} mb-1`}>
            Billing
          </h2>
          <p className={`${darkMode ? "text-[#e2e8f0]" : "text-gray-600"}`}>
            You will only be charged for the tokens used in generating the book.
            The API tracks token usage and bills accordingly. Detailed usage
            reports are available in your account dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
