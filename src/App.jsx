import { useState } from 'react'
import './App.css'
import Calculator from './Calculator'
import Tabs from './Tabs'
import SIP from './SIP'
import Result from './Result'

function App() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [result, setResult] = useState(null);

  const onTabChange = (value) => {
    if (value === selectedTab) return;

    setResult(null);
    setSelectedTab(value);
  };


  const onCalculate = (result) => {
    setResult(result);
  };

  return (<>
    <div className="w-full w-max-sm">
      <h1 className="flex font-bold text-left text-xl pb-2 text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        Returns Calculator
      </h1>
    </div>
    <div className="flex">
      <div className="w-full">
        <Tabs onChange={onTabChange} />
        <Calculator onChange={onCalculate} isSIP={selectedTab === 2} />
        {result ? <Result data={result} /> : null}
      </div>
    </div>
  </>
  )
}

export default App
