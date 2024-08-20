import React, { useState } from 'react';

const Lumpsum = ({ onChange }) => {

    const [input, setInput] = useState({
        amount: 0,
        cagr: 1,
        tenure: 1
    });

    const onInputChange = (e) => {
        const changedInput = { ...input, [e.target.name]: +e.target.value };
        setInput(changedInput);
    };

    const onCalculate = () => {
        const { amount, cagr, tenure } = input;
        if (!amount) return;
        const percent = 1 + (cagr / 100);
        const finalAmount = amount * (Math.pow(percent, tenure));
        onChange({
            amount,
            cagr,
            tenure,
            finalAmount
        });
    };

    return <div class="max-w-sm w-full p-4">
        <div class="mb-5">
            <label for="Amount" class="block mb-2 text-sm font-medium text-gray-900">Total Amount</label>
            <input name="amount" onChange={onInputChange} type="number" id="email" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="10000" />
        </div>
        <div>
            <div class="relative mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900" for="labels-range-input">Tenure {input.tenure} year(s)</label>
                <input name="tenure" value={input.tenure} onChange={onInputChange} id="labels-range-input" type="range" min="1" max="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                <span class="text-sm text-gray-500 absolute start-0 -bottom-6">1 year</span>
                <span class="text-sm text-gray-500 absolute end-0 -bottom-6">50 years</span>
            </div>
        </div>
        <div>
            <div class="relative mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900" for="labels-range-input">Expected CAGR {input.cagr + ' %'}</label>
                <input name="cagr" value={input.cagr} onChange={onInputChange} id="labels-range-input" type="range" min="1" max="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                <span class="text-sm text-gray-500 absolute start-0 -bottom-6">1%</span>
                <span class="text-sm text-gray-500 absolute end-0 -bottom-6">100%</span>
            </div>
        </div>
        <button onClick={onCalculate} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Calculate</button>
    </div>
};

export default Lumpsum;
