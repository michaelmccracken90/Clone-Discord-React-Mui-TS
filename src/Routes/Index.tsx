// Imports React Router Dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import component Interno
import Home from '../pages/Home/Index';

// Export componenet 
export default function RoutesComponent(){
  // HTML Exported
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>

  )
}