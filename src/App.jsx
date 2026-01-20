import './App.css'
import DashboardProduct from './components/DashboardProduct/DashboardProduct'
import Vitualization from './components/Vitualization/Vitualization'


function App() {
  

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', gap: 50}}>
        <DashboardProduct/>
        <Vitualization/>
      </div>
    </>
  )
}

export default App
