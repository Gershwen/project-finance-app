"use client"
import { useState } from 'react';
import Logo from '@/assets/svg/Logo.svg';
import LogoSm from '@/assets/svg/fbsm.svg';
import Image from 'next/image';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`h-screen flex`}>
      <div
        className={`rounded-r-lg transition-all duration-300 bg-gray-900 text-white ${
          isCollapsed ? 'w-20' : 'w-64'
        } flex flex-col`}
      >
        <div className="flex justify-center py-10 px-8">
          <span className={`${isCollapsed ? 'hidden' : 'block relative w-40 h-10'}`}>
            <Image
             src={Logo} 
             alt="Logo" 
             fill
             />
          </span>
          <span className={`${!isCollapsed ? 'hidden' : 'block relative w-4 h-6'}`}>
            <Image
             src={LogoSm} 
             alt="Logo" 
             fill
             />
          </span>
        </div>


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

      <div className="flex-1 p-4">
        <h1 className="text-xl font-semibold">Main Content</h1>
      </div>
    </div>
  );
};

export default Sidebar;
