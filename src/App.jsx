import './Tailwindcss.css'
import {
  BrowserRouter as Router,
Routes,
  Route,
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import FieldScreen from './screens/FieldScreen';
import SignupScreen from './screens/SignupScreen';
import FieldsScreen from './screens/FieldsScreen';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import SignupContext from './context/SignupContext';
function App() {
 

  return (
    <SignupContext>
<ToastContainer />
    <Router>
    <Routes>
      <Route  path="/"  element={ <HomeScreen/>} />
    <Route  path="/fields"  element={ <FieldsScreen/>} />
      <Route  path="/field/:IdField"  element={ <FieldScreen/>} />
      <Route  path="/signup"  element={ <SignupScreen/>} />
    </Routes>
    </Router>
   
    </SignupContext>
  )
}

export default App
