import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import NotFound from "./Pages/NotFound/NotFound";
import Nav from "./Components/Nav/Nav";
import Button from "./Components/Buttons/Button";
scroll()

function App() {


  return (
    <>
    

     <Routes> 
       <Route path="/" element={<Homepage/>}/> 
       <Route path="/nav" element={<Nav />}/> 
       <Route path="/buttons" element={<Button/>}/>
       <Route path="*" element={<NotFound/>}/>


      
     </Routes> 
    </>
  )
}

export default App
