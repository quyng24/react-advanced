import './App.css'
import Parent from './components/ReactPerformance/ParentTest'
import CountPerformance from './components/ReactPerformance/CountPerformance'
import SearchDebounce from './components/SearchDebounce/SearchDebounce'


function App() {
  

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', gap: 50}}>
        <SearchDebounce/>
        <CountPerformance/>
      </div>
    </>
  )
}

export default App
