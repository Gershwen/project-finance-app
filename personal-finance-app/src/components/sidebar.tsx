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
import ArrowFlatLinesIcon from './icons/ArrowFlatLines';

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
    <div className="h-screen flex flex-col lg:flex-row">
      <div
        className={`rounded-r-lg transition-all duration-300 bg-gray-900 text-white ${
          isCollapsed ? "w-20" : "w-64"
        } hidden lg:flex flex-col`}
      >

        <div className={`flex ${isCollapsed ? 'justify-center' : '' } py-10 px-8`}>
          <span className={`${isCollapsed ? "hidden" : "block relative w-40 h-10"}`}>
            <Image src={Logo} alt="Logo" fill />
          </span>
          <span className={`${!isCollapsed ? "hidden" : "block relative w-4 h-6"}`}>
            <Image src={LogoSm} alt="Logo" fill />
          </span>
        </div>
<div className='flex flex-col justify-between h-full'>
        <nav className="flex flex-col gap-2 py-4 pr-4">
          {navItems.map((item, index) => {
            const isActive = index === activeIndex;
            const Icon = item.icon;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative group flex items-center gap-2 ${isCollapsed ? 'p-4' :'py-4 px-8'}  rounded-e-lg cursor-pointer transition-colors ${
                  isActive ? isCollapsed ? '' : "bg-beige-100 text-gray-900" : "hover:bg-gray-700 text-gray-300"
                }`}
              >
              {isActive ? isCollapsed ? null : <div className='absolute left-0 h-full w-2 bg-green'></div> : null}
                {Icon && (
                  <Icon
                    className={`${isCollapsed ? 'mx-auto' : ''} w-5 h-5 transition-colors ${
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
                    className={`transition-colors font-bold ${
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
        </nav>
        <button aria-label="Minimize Menu" onClick={() => setIsCollapsed(!isCollapsed)} className="flex gap-4 cursor-pointer align-middle group mb-12 mt-4 py-4 px-8 text-left">
                  <ArrowFlatLinesIcon
                    className={`${isCollapsed ? 'mx-auto rotate-180' : ''} w-5 h-5 transition-colors text-gray-300 group-hover:text-white`}
                    width="24"
                    height="24"
                  /> 
                  { !isCollapsed && <span className='font-bold text-gray-300 group-hover:text-white'>Minimize Menu</span> }
        </button>
        </div>
      </div>

      <div className="flex-1 p-4">
        <h1 className="text-xl font-semibold">Main Content</h1>
      </div>

      {/* tablet */}
      <div className='justify-between flex lg:hidden px-10 pt-2 bg-grey-900 rounded-se-xl rounded-ss-xl'>
          {navItems.map((item, index) => {
            const isActive = index === activeIndex;
            const Icon = item.icon;
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative py-2 px-3 rounded-se-lg rounded-ss-lg flex flex-col items-center cursor-pointer transition-colors ${
                  activeIndex === index ? "text-green bg-beige-100" : "text-gray-300 hover:text-white"
                }`}
              >
              <Icon className="mb-2  w-6 h-6" />
              <div className={`hidden sm:block font-bold text-grey-300 ${activeIndex === index ? "text-grey-900": ''}`}>{item.label}</div>
              {isActive ? isCollapsed ? null : <div className='absolute bottom-0 h-2 w-full bg-green'></div> : null}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;


