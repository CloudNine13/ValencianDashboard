import React, { useEffect, useState } from 'react';
import Sidebar from './components/ui/Sidebar'
import Valenbisi from './components/pages/Valenbisi'
import Flowers from './components/pages/Flowers';
import Bicycles from './components/pages/Bicycles';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './css/app/App.css';

function App() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const element = document.querySelector('.loading-screen')
        if (element) {
            element.remove()
            setIsLoading(false)
        }
        
    }, []) 

    if (isLoading) {
        return null
    }

    return(
        <Router>
            <Sidebar />
            <Routes>
                <Route path='/valenbisi' element={<Valenbisi />} />
                <Route path='/flowers' element={<Flowers />} />
                <Route path='/bicycles' element={<Bicycles />} />
                <Route path='*' element={<Navigate to='/valenbisi'/>}/>
            </Routes>
        </Router>
    )
}


export default App;
