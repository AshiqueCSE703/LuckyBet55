import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Screens/Home/Home"


function App() {


  return (
    <>
      <div>
        
        <Router>

          <Routes>


            Homepage
            <Route 
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />

          </Routes>

        </Router>

      </div>
    </>
  )
}

export default App
