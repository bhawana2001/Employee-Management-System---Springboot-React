import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import ListEmployeesComponent from './component/ListEmployeesComponent';
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';
import DeleteEmployeeComponent from './component/DeleteEmployeeComponent';
import ViewEmployeeComponent from './component/ViewEmployeeComponent';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ListEmployeesComponent />} />
            <Route path="/employees" element={<ListEmployeesComponent />} />
            <Route path="/add-employee" element={<CreateEmployeeComponent />} />
            <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} />
            <Route path="/delete-employee/:id" element={<DeleteEmployeeComponent />} />
            <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />

          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
// We have router in which we create a div element inside dive we have header & footer that will use for
//all routes inside that we have switches and that contains routes
//i.e. we have all routes inside switch and switch is also in another div 