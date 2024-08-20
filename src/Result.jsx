import PieChart from "./PieChart";

function Result({ data }) {
    const { amount, finalAmount, cagr, tenure } = data;

    return (<div>
        <h1 className="mb-2 font-semibold text-lg text-gray-500">Invested {amount.toLocaleString()}</h1>
        <h1 className="font-semibold text-xl text-gray-500">Returns {finalAmount.toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} </h1>
        <span className="mb-4 font-semibold text-sm text-gray-500">@ {cagr}% for {tenure} years</span>
        <PieChart data={data} />
    </div>);
}

export default Result;