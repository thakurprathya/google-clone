import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/search" element={<SearchPage />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
