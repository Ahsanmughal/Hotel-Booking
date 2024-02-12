

import Layout from './layout'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";
import Register from './pages/Register';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout><p>Home Page</p></Layout>}/>
                <Route path='/search' element={<Layout><p>Search Page</p></Layout>}/>
                <Route path='/signup' element={<Layout><Register/></Layout>}/>
                <Route path='*' element={<Navigate to="/"/>}></Route>
            </Routes>
        </Router>        
    )
}

export default App
