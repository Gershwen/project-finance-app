"use client"
import { useState } from 'react';
import Logo from '@/assets/svg/Logo.svg';
import LogoSm from '@/assets/svg/fbsm.svg';
import Image from 'next/image';
import HomeIcon from './icons/Home';
import TransactionsIcon from './icons/Transactions';
import BudgetsIcon from './icons/Budgets';
import PotsIcon from './icons/Pots';
import RecurringBillsIcon from './icons/Recurringbills';

const navItems = [
  { label: "Overview", icon: HomeIcon },
  { label: "Transactions", icon: TransactionsIcon },
  { label: "Budgets", icon: BudgetsIcon },
  { label: "Pots", icon: PotsIcon },
  { label: "Recurring bills", icon: RecurringBillsIcon },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Default active is "Overview"

  return (
    <div className="h-screen flex">
      <div
        className={`rounded-r-lg transition-all duration-300 bg-gray-900 text-white ${
          isCollapsed ? "w-20" : "w-64"
        } flex flex-col`}
      >

        <div className="flex justify-center py-10 px-8">
          <span className={`${isCollapsed ? "hidden" : "block relative w-40 h-10"}`}>
            <Image src={Logo} alt="Logo" fill />
          </span>
          <span className={`${!isCollapsed ? "hidden" : "block relative w-4 h-6"}`}>
            <Image src={LogoSm} alt="Logo" fill />
          </span>
        </div>

        <nav className="flex flex-col gap-2 p-4">
          {navItems.map((item, index) => {
            const isActive = index === activeIndex;
            const Icon = item.icon;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group flex items-center gap-2 p-2 rounded cursor-pointer transition-colors ${
                  isActive ? isCollapsed ? '' : "bg-beige-100 text-gray-900" : "hover:bg-gray-700 text-gray-300"
                }`}
              >
                {Icon && (
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isActive
                        ? "text-green"
                        : "text-gray-300 group-hover:text-white"
                    }`}
                    width="24"
                    height="24"
                  />
                )}
                {!isCollapsed && (
                  <span
                    className={`transition-colors ${
                      isActive
                        ? "text-gray-900"
                        : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                )}
              </div>
            );
          })}

          <button onClick={() => setIsCollapsed(!isCollapsed)} className="mt-4 p-2 text-left">
            chevL { !isCollapsed && <span>Minimize Menu</span> }
          </button>
        </nav>
      </div>

      <div className="flex-1 p-4">
        <h1 className="text-xl font-semibold">Main Content</h1>
      </div>
    </div>
  );
};

export default Sidebar;


