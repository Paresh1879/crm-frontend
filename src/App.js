import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import TicketPage from "./TicketPage";
import "./App.css";

const App=()=> {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/ticket" element={<TicketPage/>}/>
      <Route path="/ticket:/:id" element={<TicketPage editMode={true}/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
