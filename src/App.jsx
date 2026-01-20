import './App.css'
import Parent from './components/ReactPerformance/ParentTest'
import CountPerformance from './components/ReactPerformance/CountPerformance'
import SearchDebounce from './components/SearchDebounce/SearchDebounce'
import DashboardProduct from './components/DashboardProduct/DashboardProduct'
import Vitualization from './components/Vitualization/Vitualization'


function App() {
  

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', gap: 50}}>
        <SearchDebounce/>
        <CountPerformance/>
        <DashboardProduct/>
        <Vitualization/>
      </div>
    </>
  )
}

export default App
