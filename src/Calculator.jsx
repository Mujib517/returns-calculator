import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { toWords } from './utils/currencyUtil';


const Calculator = ({ onChange, isSIP }) => {

    const [input, setInput] = useState({
        amount: 0,
        cagr: 1,
        tenure: 1
    });

    const onInputChange = (e) => {
        const changedInput = { ...input, [e.target.name]: +e.target.value };
        setInput(changedInput);
    };

    const calculateLumpsum = () => {
        const { amount, cagr, tenure } = input;
        if (!amount) return;
        const percent = 1 + (cagr / 100);
        return amount * (Math.pow(percent, tenure));
    };

    const calculateSIP = () => {
        const { amount, cagr, tenure } = input;
        const totalMonths = 12 * tenure;

        const monthlyRate = (cagr / 100) / 12;

        const futureValue = amount * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);

        return futureValue;
    };

    const onCalculate = () => {
        const { amount, cagr, tenure } = input;
        if (!amount) return;

        const finalAmount = isSIP ? calculateSIP() : calculateLumpsum();

        const investedAmount = isSIP ? 12 * tenure * amount : amount;
        onChange({
            amount: investedAmount,
            cagr,
            tenure,
            finalAmount
        });
    };

    const onAmtChange = ({ value }) => {
        const changedInput = { ...input, amount: +value };
        setInput(changedInput);
    };

    return <div class="max-w-sm w-full p-4">
        <div class="mb-5">
            <label for="Amount" class="block mb-2 text-sm font-medium text-gray-900">{isSIP ? 'Monthly Amount' : 'Lumpsum Amount'}</label>
            <NumericFormat placeholder="100,000" name="amount" onValueChange={onAmtChange} class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" prefix="₹" thousandSeparator="," />
            {input.amount ?
                <span className="text-left text-xs">{toWords.convert(input.amount)}</span>
                : null}
        </div>
        <div>
            <div class="relative mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900" for="labels-range-input">Tenure {input.tenure} year(s)</label>
                <input name="tenure" value={input.tenure} onChange={onInputChange} id="labels-range-input" type="range" min="1" max="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer bg-blue-200 slider" />
                <span class="text-sm text-gray-500 absolute start-0 -bottom-6">1 year</span>
                <span class="text-sm text-gray-500 absolute end-0 -bottom-6">50 years</span>
            </div>
        </div>
        <div className="mt-6">
            <br />
            <div class="relative">
                <label class="block mb-2 text-sm font-medium text-gray-900" for="labels-range-input">Expected CAGR {input.cagr + '%'}</label>
                <input name="cagr" value={input.cagr} onChange={onInputChange} id="labels-range-input" type="range" min="1" max="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none bg-blue-200 cursor-pointer" />
                <span class="text-sm text-gray-500 absolute start-0 -bottom-6">1%</span>
                <span class="text-sm text-gray-500 absolute end-0 -bottom-6">50%</span>
            </div>
        </div>
        <div className="mt-6">
            <button onClick={onCalculate} type="submit" class="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Calculate</button>
        </div>
    </div>
};

export default Calculator;
