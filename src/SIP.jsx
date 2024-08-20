import React from 'react';

const SIP = () => {
    return <div>
        <form class="max-w-sm p-4">
            <div class="mb-5">
                <label for="Amount" class="block mb-2 text-sm font-medium text-gray-900">Every month Amount</label>
                <input type="number" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="10000" />
            </div>
            <div class="mb-5">
                <label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900">Tenure</label>
                <input id="minmax-range" type="range" min="0" max="10" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            </div>
            <div class="mb-5">
                <label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900">CAGR %</label>
                <input id="minmax-range" type="range" min="0" max="10" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Calculate</button>
        </form>

    </div>
};

export default SIP;
