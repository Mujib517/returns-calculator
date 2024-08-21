import PieChart from "./PieChart";
import { toWords } from "./utils/currencyUtil";

function Result({ data }) {

    const { amount, finalAmount, cagr, tenure } = data;
    const returns = finalAmount - amount;


    const getFormattedCurrency = (amt) => {
        return '₹' + amt.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    };

    return <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">Summary</h1>
        <div className="space-y-4">
            {/* Invested Amount */}
            <div className="flex items-center justify-between bg-blue-100 text-blue-800 px-4 py-2 rounded-md">
                <span className="text-lg font-medium">Invested Amount</span>
                <span className="text-lg font-semibold">{getFormattedCurrency(amount)}</span>
            </div>

            {/* Returns */}
            <div className="flex items-center justify-between bg-green-100 text-green-800 px-4 py-2 rounded-md">
                <span className="text-lg font-medium">Expected Returns</span>
                <span className="text-lg font-semibold">{getFormattedCurrency(returns)}</span>
            </div>

            {/* Final Amount */}
            <div className="flex items-center justify-between bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md">
                <span className="text-lg font-medium">Final Amount</span>
                <span className="text-lg font-semibold">{getFormattedCurrency(finalAmount)}</span>
            </div>
        </div>
        <PieChart data={data} />
    </div>
}

export default Result;