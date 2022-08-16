
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashBoard from './pages/Dashboard';
import TicketPage from './pages/TicketPage';
import Nav from './components/Nav'
const App =()=> {
  return (
    <div className="app">
     <BrowserRouter>
     <Nav/>
      <Routes>
        {/*  "api/" home rout Dashboard Page */}
        <Route path='/' element={<DashBoard/>}/>
        {/* api/ticket */}
        <Route path='/ticket' element={<TicketPage/>}/>
        {/* api/ticket/:id */}
        <Route path='/ticket/:id' element={<TicketPage editMode={true}/>}/>
      </Routes>
      
     </BrowserRouter>
    </div>
  )
}

export default App
