import React, { useId } from 'react';

function InputBox ({
  label,
  amount,
  onAmountChange = () => {},
  onCurrencyChange = () => {},
  currencyOptions = [],
  selectCurrency,
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  const currencySelectId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2'>
        <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          placeholder='Amount'
          className='outline-none w-full bg-transparent py-1.5'
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className='w-1/2 flex flex-col flex-wrap justify-end text-right'>
        <label htmlFor={currencySelectId} className='text-black/40 mb-2'>
          Currency Type
        </label>
        <select
          id={currencySelectId}
          className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-[70px] self-end'
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
         >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;