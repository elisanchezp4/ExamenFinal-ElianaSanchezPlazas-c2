import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Favs from './Pages/Favs'
import Navbar from './Components/Navbar'
import { routes } from './utils/routes'
import DentistDetail from './Pages/DentistDetail'
import Counter from './Components/Counter'



function App() {

  return (
    <>
      <Navbar/> 
      <Routes>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.contact} element={<Contact/>}/>
        <Route path={routes.favs} element={<Favs/>}/>
        <Route path={routes.dentist} element={<DentistDetail/>}/>
    </Routes>
    </>
  )
}

export default App