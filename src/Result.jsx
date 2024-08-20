import PieChart from "./PieChart";

function Result({ data }) {
    const { amount, finalAmount, cagr, tenure } = data;

    return (<div>
        <h1 className="mb-2 font-bold text-gray-500">Invested {amount.toLocaleString('en-in', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
        <h1 className="font-bold text-2xl text-gray-600">Returns {finalAmount.toLocaleString('en-in', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} </h1>
        <span className="mb-4 font-semibold text-xs text-gray-400">@ {cagr}% for {tenure} years</span>
        <PieChart data={data} />
    </div>);
}

export default Result;