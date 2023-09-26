import './App.css'
import Sidenav from './Components/Sidenav/Sidenav'
import Topnav from './Components/Topnav/Topnav'
import Details from './Components/Content/Details/Details'
import Uploadimg from './Components/Content/Uploadimg/Uploadimg'
import Profile from './Components/Content/Profile/Profile'
import Additional from './Components/Content/Additional/Additional'

function App() {
  return (
    <>
    <Sidenav></Sidenav>
    <Topnav></Topnav>
    <Uploadimg></Uploadimg>
    <Details></Details>
    <Profile></Profile>
    <Additional></Additional>
    </>
  )
}

export default App
