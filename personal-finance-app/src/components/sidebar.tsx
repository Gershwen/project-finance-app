"use client"
import { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`h-screen flex`}>
      {/* Sidebar */}
      <div
        className={`rounded-r-lg transition-all duration-300 bg-gray-800 text-white ${
          isCollapsed ? 'w-16' : 'w-64'
        } flex flex-col`}
      >
        <div className="flex items-center justify-between p-4">
          <span className={`text-lg font-bold ${isCollapsed ? 'hidden' : 'block'}`}>
            My App
          </span>
          {/* <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-white"
          >
            {isCollapsed ? '>' : '<'}
          </button> */}
        </div>

        {/* Sidebar items */}
        <nav className="flex flex-col gap-2 p-4">
          {[
            { label: 'Overview', icon: '' },
            { label: 'Transactions', icon: '' },
            { label: 'Budgets', icon: '' },
            { label: 'Pots', icon: '' },
             { label: 'Recurring bills', icon: '' },
            
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer"
            >
              {item.icon}
              {!isCollapsed && <span>{item.label}</span>}
            </div>
          ))}

          <button
                      onClick={() => setIsCollapsed(!isCollapsed)}

          >chevL{!isCollapsed && <span>Minimize Menu</span>}</button>
        </nav>
      </div>

      {/* Content area */}
      <div className="flex-1 p-4">
        <h1 className="text-xl font-semibold">Main Content</h1>
      </div>
    </div>
  );
};

export default Sidebar;
