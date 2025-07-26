import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Screens/Home/Home"


function App() {


  return (
    <>
      <div>
        
        {/* Browser Routers - React Router Dom  */}
        <Router>
          <Routes>

            {/* Homepage */}
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
