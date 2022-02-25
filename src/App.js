import React from 'react';
import Valenbisi from './pages/Valenbisi'
import Flowers from './pages/Flowers';
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Bicycles from './pages/Bicycles';

function App() {
    //TODO: Beetween Router and switch = sidebar
    return(
        <Router>
            <Sidebar />
            <Routes>
                <Route path='/' element={<Valenbisi />} />
                <Route path='/flowers' element={<Flowers />} />
                <Route path='/bicycles' element={<Bicycles />} />
            </Routes>
        </Router>
    )
}


export default App;
