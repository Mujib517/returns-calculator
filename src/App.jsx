import { useState } from 'react'
import './App.css'
import Lumpsum from './Lumpsum'
import Tabs from './Tabs'
import SIP from './SIP'
import Result from './Result'

function App() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [result, setResult] = useState(null);

  const onTabChange = (value) => {
    setSelectedTab(value);
  };


  const onCalculate = (result) => {
    setResult(result);
  };

  return (
    <div>
      <h1 className="font-semibold text-left pb-2 text-gray-600">Returns Calculator</h1>
      <div className="flex p-2 min-h-screen bg-gray-100">
        <div>
          <Tabs onChange={onTabChange} />
          {selectedTab === 1 ? <Lumpsum onChange={onCalculate} /> : <SIP />}
          {result ? <Result data={result} /> : null}
        </div>
      </div>
    </div>
  )
}

export default App
