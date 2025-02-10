import './App.css'
import SimpleData from './components/SimpleData'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SimpleData />}/>
      </Routes>
    </BrowserRouter>
    // <div>
    //   <Data></Data>
    // </div>
  )
}

export default App
