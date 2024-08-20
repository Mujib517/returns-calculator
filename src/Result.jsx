import PieChart from "./PieChart";
import { toWords } from "./utils/currencyUtil";

function Result({ data }) {
    const { amount, finalAmount, cagr, tenure } = data;

    return (<div className="p-2 m-2">
        <div class="relative">
            <PieChart data={data} />
            <table class="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Type
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Amount
                        </th>
                        <th scope="col" class="px-6 py-3">
                            In Words
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Invested
                        </th>
                        <td class="px-6 py-4">
                            {amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td class="px-6 py-4">
                            <span className="mb-2 text-xs">{toWords.convert(amount)}</span>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Returns
                        </th>
                        <td class="px-6 py-4">
                            {(finalAmount - amount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td class="px-6 py-4">
                            <span className="mb-2 text-xs">{toWords.convert(finalAmount - amount)}</span>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Total
                        </th>
                        <td class="px-6 py-4">
                            {finalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td class="px-6 py-4">
                            <span className="mb-2 text-xs">{toWords.convert(finalAmount)}</span>
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Parameters
                        </th>
                        <td class="px-6 py-4" colSpan={2}>
                            @{cagr} % for {tenure} year(s)
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>);
}

export default Result;