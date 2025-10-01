import React, { useState } from "react";

const BrowserWindow = ({ tabs = [], children }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  return (
    <div className="w-full  mx-auto border border-pink-300 rounded-lg shadow-lg bg-pink-100/30 overflow-hidden">
      {/* Browser Top Bar */}
      <div className="bg-pink-200/20 px-4 py-2 flex items-center gap-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <div className="ml-auto text-sm text-pink-500">shin-portfolio.dev</div>
      </div>

      {/* Tabs */}
      <div className="bg-pink-100/50 border-b border-pink-300 flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition rounded-tl-xl rounded-tr-xl ${
              activeTab === tab.id
                ? "bg-white/50 border-t-2 border-pink-500 text-pink"
                : "text-pink-500 hover:bg-pink-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="p-6">{children(activeTab)}</div>
    </div>
  );
};

export default BrowserWindow;
