import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MyShows from './pages/MyShows';
import SummaryPage from './pages/SummaryPage';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/booked' element={<MyShows />} />
				<Route path='/shows/:id' element={<SummaryPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
