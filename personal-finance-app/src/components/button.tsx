import React from 'react';
import CaretIcon from './icons/Caret';

type ButtonProps = {
  text: string;
  btnType?: 'primary' | 'secondary' | 'tertiary' | 'destroy';
};

const Button: React.FC<ButtonProps> = ({ text, btnType = 'primary' }) => {
  const buttonMap: Record<NonNullable<ButtonProps['btnType']>, string> = {
    primary:
      'bg-gray-900 hover:bg-gray-500 text-white rounded-lg border border-transparent',
    secondary:
      'bg-beige-100 hover:bg-white text-grey-900 rounded-lg border border-transparent hover:border-grey-900 hover:border-solid',
    tertiary: 'bg-transparent text-grey-500 hover:text-grey-900',
    destroy:
      'bg-red-600 hover:bg-red-500 rounded-lg border border-transparent text-white',
  };

  const baseClasses =
    'transition-colors flex items-center justify-center gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto';

  return (
    <button className={`${baseClasses} ${buttonMap[btnType]}`}>
      {text}
      {btnType == 'tertiary' ?
      <CaretIcon
        width={'12'}
        height={'12'}
      /> : null}
    </button>
  );
};

export default Button;
