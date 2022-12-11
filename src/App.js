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
                    <Route path="/about" element={<h1>This is About page</h1>}/>
                    <Route path="/store" element={<h1>This is Google Store page</h1>}/>
                    <Route path="/gmail" element={<h1>This is Mail page</h1>}/>
                    <Route path="/images" element={<h1>This is Images page</h1>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
