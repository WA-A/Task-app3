import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Proudcts from './componet/proudcts/Proudcts.jsx'
import Navbar from './componet/navbar/Navbar.jsx'
import Rest from './componet/res/Rest.jsx'
import Footer from './componet/footer/Footer.jsx'
import Home from './componet/home/Home.jsx'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='' element= {<Home/>}></Route>
      <Route path='/proudcts' element= {<Proudcts/>}></Route>
      <Route path='/res' element= {<Rest/>}>
        
      </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App